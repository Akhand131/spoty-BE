const mongoose = require('mongoose');
const { Schema } = mongoose;

const pdfExtractionSchema = new Schema(
    {
        extractedData: { type: Schema.Types.Mixed }, // Stores JSON
    },
    { timestamps: true }
);

const PdfExtraction = mongoose.model('PdfExtraction', pdfExtractionSchema);
module.exports = PdfExtraction;
