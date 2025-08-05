const { Router } = require('express');

const { HttpStatus } = require('../constants/constants');
const { default: mongoose } = require('mongoose');
const LogModel = require('../models/LogModel');
const Pdf = require('../models/PdfModel');


class InfoController {
    constructor() {
        this.router = Router();

        this.configureRoutes();
    }

    configureRoutes() {
        this.router.get('/', this.getInfo);

    }

    getInfo = async (req, res) => {
        try {
            const contracts = await Pdf.find({}, { logs: 0 }).populate('extractionId');

            // Fetch Logs
            const logs = await LogModel.find();

            // Compose response
            const response = {
                responseCode: 200,
                contract: contracts,
                logs: logs
            };

            return res.status(HttpStatus.OK).json(response);
        } catch (error) {
            console.error("Error in fetching Info", error);
            res.status(500).json({ message: "Failed to fetch Info!" });
        }
    };



}

module.exports = { InfoController };
