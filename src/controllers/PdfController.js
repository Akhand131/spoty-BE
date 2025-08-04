const { Router } = require('express');
const fs = require('fs');
const path = require('path');
const { ApiResponse, HttpStatus } = require('../constants/constants');
const Pdf = require('../models/PdfModel');
const { uploadOnCloudinary } = require('../utils/cloudinary');
const pdfParse = require('pdf-parse');
const { upload } = require('../middleware/multerMiddleware');
const Tesseract = require('tesseract.js');
const { fromPath } = require('pdf2pic');
const { auth } = require('../middleware/authMiddleware');
const PdfExtraction = require('../models/PdfExtraction');
const mammoth = require('mammoth');
const { default: mongoose } = require('mongoose');
const LogModel = require('../models/LogModel');
const { metaDataExtractionFlow } = require('../spoty/genai/flows/metaData-Extraction');

class PdfController {
    constructor() {
        this.router = Router();
        this.configureRoutes();
    }

    configureRoutes() {
        this.router.post('/upload', auth(), upload.single('file'), this.createPdf.bind(this));
        this.router.get('/', this.getPdf.bind(this));
        this.router.get('/:id', this.getPdf.bind(this));
    }

    createPdf = async (req, res) => {
        try {
            const { title, counterparty_name, contract_type, organization_entity } = req.body;
            if (!title || !counterparty_name || !contract_type || !organization_entity) {
                return res.status(400).json({ message: 'Enter required fields' });
            }
            const parsedcounterparty_name = JSON.parse(counterparty_name);

            if (!parsedcounterparty_name.every(id => mongoose.Types.ObjectId.isValid(id))) {
                return res.status(400).json({ message: 'Invalid ObjectId in counterparty_name array' });
            }

            const db = mongoose.connection;

            const file = req.file;
            if (!file) {
                return res.status(400).json({ message: 'No file uploaded' });
            }

            const ext = file?.originalname.split('.').pop()?.toLowerCase() || "";
            if (!['pdf', 'docx'].includes(ext)) {
                return res.status(400).json({ message: 'Only PDF and DOCX files are allowed' });
            }

            console.log("ak1");
            let extractedJson = {};

            if (ext === 'pdf') {
                const buffer = await fs.promises.readFile(file.path);
                const data = await pdfParse(buffer);

                extractedJson = {
                    rawText: data.text,
                    info: data.info,
                    metadata: data.metadata,
                };
            } else if (ext === 'docx') {
                const buffer = await fs.promises.readFile(file.path);
                const result = await mammoth.extractRawText({ buffer: buffer });

                extractedJson = {
                    rawText: result.value,
                    info: {},
                    metadata: {},
                };
            }
            const result = await uploadOnCloudinary(file.path);
            console.log("ak2");

            console.log("ak3");


            const metaDataAIResponse = await metaDataExtractionFlow({contractData:JSON.stringify(extractedJson)});

            const metaData = await db.collection('metaData').insertOne(metaDataAIResponse);

            // Save Extraction Data
            const extraction = await PdfExtraction.create({
                extractedData: extractedJson
            });
            console.log("ak4");

            const newPdf = await Pdf.create({
                title: title,
                url: result.secure_url,
                owner: req.user._id,
                counterparty_name: parsedcounterparty_name,
                contract_type: contract_type,
                organization_entity: organization_entity,
                extractionId: extraction._id,
                metaDataId: metaData.insertedId,
            });
            for (const refId of parsedcounterparty_name) {
                await LogModel.create({
                    createdBy: req.user._id,
                    contractId: newPdf._id,
                    counterpartiesId:refId,
                    status: "Draft",
                    organization_entity: organization_entity,
                    contract_type: contract_type
                })
            }

            
            console.log("ak5");

            return res.status(HttpStatus.CREATED).json({
                status: ApiResponse.SUCCESS,
                message: 'Pdf Created successfully',
                data: newPdf
            });
        } catch (error) {
            console.error("Error in uploading pdf", error);
            res.status(500).json({ message: "Failed to upload Pdf!" });
        }
    }

    getPdf = async (req, res) => {
        try {
            const { id } = req.params;
            let pdfs = [];

            if (id) {
                if (!mongoose.Types.ObjectId.isValid(id)) {
                    return res.status(400).json({ message: "Invalid PDF ID" });
                }
                const pdf = await Pdf.findById(id).populate('extractionId');
                if (!pdf) {
                    return res.status(404).json({ message: "PDF not found" });
                }
                pdfs = [pdf]; // make it array for uniformity below
            } else {
                pdfs = await Pdf.find().populate('extractionId');
                if (pdfs.length === 0) {
                    return res.status(404).json({ message: "No PDFs found" });
                }
            }

            return res.status(200).json({
                status: "SUCCESS",
                message: id ? "PDF fetched successfully" : "All PDFs fetched successfully",
                data: id ? pdfs[0] : pdfs
            });

        } catch (error) {
            console.error("Error in fetching pdf", error);
            res.status(500).json({ message: "Failed to get Pdf!" });
        }
    }

    // extractKeywordsFromPdf = async (req, res) => {
    //     try {
    //         const file = req.file;
    //         if (!file) {
    //             return res.status(400).json({ message: 'No file uploaded' });
    //         }
    //         if (file.mimetype !== 'application/pdf') {
    //             return res.status(400).json({ message: 'Only PDF files are allowed' });
    //         }

    //         const buffer = await fs.promises.readFile(file.path);
    //         const data = await pdfParse(buffer);
    //         let text = data.text.trim();

    //         const KEYWORDS = ['executed on', 'signed on', 'Name:', 'ROLL NO.'];
    //         let matchedLines = [];

    //         if (text) {
    //             // Text-based PDF found, search keywords
    //             const lines = text.split('\n');
    //             lines.forEach(line => {
    //                 KEYWORDS.forEach(keyword => {
    //                     if (line.toLowerCase().includes(keyword.toLowerCase())) {
    //                         matchedLines.push(line.trim());
    //                     }
    //                 });
    //             });
    //         }

    //         // If no text found (scanned PDF), use OCR fallback
    //         if (matchedLines.length === 0) {
    //             console.log("Running OCR fallback...");

    //             const convert = fromPath(file.path, {
    //                 density: 200,
    //                 saveFilename: 'temp_image',
    //                 savePath: './uploads',
    //                 format: 'png',
    //                 width: 1000,
    //                 height: 1414
    //             });

    //             const imageResponse = await convert(1);  // Extracting first page only (extendable)

    //             const ocrResult = await Tesseract.recognize(
    //                 imageResponse.path,
    //                 'eng',
    //                 { logger: m => console.log(m) }
    //             );

    //             const ocrText = ocrResult.data.text;
    //             const ocrLines = ocrText.split('\n');

    //             ocrLines.forEach(line => {
    //                 KEYWORDS.forEach(keyword => {
    //                     if (line.toLowerCase().includes(keyword.toLowerCase())) {
    //                         matchedLines.push(line.trim());
    //                     }
    //                 });
    //             });

    //             // Clean up temp image
    //             fs.unlinkSync(imageResponse.path);
    //         }

    //         if (matchedLines.length === 0) {
    //             return res.json({ message: 'No keywords found in PDF.' });
    //         }

    //         return res.json({
    //             status: ApiResponse.SUCCESS,
    //             message: 'Keywords extracted successfully',
    //             matchedLines,
    //             count: matchedLines.length,
    //         });

    //     } catch (error) {
    //         console.error('Error extracting keywords from PDF:', error);
    //         res.status(500).json({ message: 'Failed to extract keywords from PDF' });
    //     }
    // }
}

module.exports = { PdfController };
