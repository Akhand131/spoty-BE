const { Router } = require('express');

const { HttpStatus } = require('../constants/constants');

const { default: mongoose } = require('mongoose');
const LogModel = require('../models/LogModel');


class CounterpartiesController {
  constructor() {
    this.router = Router();

    this.configureRoutes();
  }

  configureRoutes() {
    this.router.post('/create', this.createLogs);
    this.router.post('/update',this.updateLogs);
    
  }

  createLogs = async (req, res) => {
    try {
        const { pdfId, counterpartyId, status } = req.body;

        // Validate required fields
        if (!pdfId || !counterpartyId || !status) {
            return res.status(400).json({ message: 'pdfId, counterpartyId, and status are required' });
        }

        // Validate status value
        const VALID_STATUSES = ['Draft', 'Redlining', 'Signing', 'Executed', 'On Hold', 'Voided'];
        if (!VALID_STATUSES.includes(status)) {
            return res.status(400).json({ message: `Invalid status. Allowed values are: ${VALID_STATUSES.join(', ')}` });
        }

        // Create log entry
        const logEntry = await LogModel.create({
            contractId: pdfId,
            counterpartiesId: counterpartyId,
            status: status
        });

        return res.status(201).json({
            message: 'Log created successfully',
            data: logEntry
        });

    } catch (error) {
      console.error("Error in creating counterparties", error);
      res.status(500).json({ message: "Failed to create counterparties!" });
    }
  };

 
  
}

module.exports = { CounterpartiesController };
