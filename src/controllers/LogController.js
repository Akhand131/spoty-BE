const { Router } = require('express');

const { HttpStatus } = require('../constants/constants');

const { default: mongoose } = require('mongoose');
const LogModel = require('../models/LogModel');
const Pdf = require('../models/PdfModel');
const CounterpartiesModel = require('../models/CounterpartiesModel');


class LogController {
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

  updateLogs = async (req, res) => {
    try {
     
        const { id,status, cp_id, message } = req.body;

        const logs = await LogModel.findById(id);
        if (!logs) {
            return res.status(404).json({ message: 'No Logs found' });
        }

        if(message && !cp_id){
            return res.status(401).json({ message: 'Please provide id to add message' });
        }

        const contractId = logs.contractId;
        const contract = await Pdf.findById(contractId);

        if (!contract) {
            return res.status(404).json({ message: 'Contract not found' });
        }

        // Push message to contract.logs
        if (message) {
            const cp=await CounterpartiesModel.findById(cp_id);
            contract.logs.push({
                message,
                createdBy: cp.name || null,  // Use authenticated user's ID if available
                createdAt: new Date()
            });
        }

        // Push cp_id to counterparty_signature if valid
        if (cp_id && contract.counterparty_name.includes(cp_id)) {
            if (!contract.counterparty_signature.includes(cp_id)) {
                contract.counterparty_signature.push(cp_id);
            }
        }

        // Update status logic
        if (status) {
            if (status === 'Signing' || status === 'Executed') {
                let allSigned = true;
                for (const refId of contract.counterparty_signature) {
                    if (!contract.counterparty_name.includes(refId)) {
                        allSigned = false;
                        break;
                    }
                }
                if (allSigned) {
                    contract.status = 'Executed';
                }
            } else {
                contract.status = status;
            }
        }

        await contract.save();

        return res.status(200).json({
            message: 'Log updated successfully',
            data: contract
        });

    } catch (error) {
        console.error("Error in updating logs", error);
        res.status(500).json({ message: "Failed to update logs!" });
    }
  };


 
  
}

module.exports = { LogController };
