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
    this.router.get('/',this.getLogs.bind(this));
    this.router.get('/:contractId',this.getLogs.bind(this));
    this.router.post('/create', this.createLogs);
    this.router.post('/update',this.updateLogs);
    
    
  }

  getLogs = async (req, res) => {
    try {
        const { contractId } = req.params;
        let logs = [];

        if (contractId) {
            if (!mongoose.Types.ObjectId.isValid(contractId)) {
                return res.status(400).json({ message: "Invalid Contract ID" });
            }

            logs = await LogModel.find({ contractId: contractId });

            if (logs.length === 0) {
                return res.status(404).json({ message: "No Logs found for this contract" });
            }
        } else {
            logs = await LogModel.find();

            if (logs.length === 0) {
                return res.status(404).json({ message: "No Logs found" });
            }
        }

        return res.status(200).json({
            status: "SUCCESS",
            message: contractId ? "Contract Logs fetched successfully" : "All logs fetched successfully",
            data: logs
        });

    } catch (error) {
        console.error("Error in fetching log", error);
        res.status(500).json({ message: "Failed to get Logs!" });
    }
};


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
     
        const { contractId,status, cp_id, message } = req.body;

       let msg=[];

        if(message && !cp_id){
            return res.status(401).json({ message: 'Please provide id to add message' });
        }

     
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
            msg.push(message)
            
        }

        // Push cp_id to counterparty_signature if valid
        if (status&&cp_id && contract.counterparty_name.includes(cp_id)&&status==='Signed') {
            const cp=await CounterpartiesModel.findById(cp_id);
            if (!contract.counterparty_signature.includes(cp_id)) {
                contract.counterparty_signature.push(cp_id);
                contract.logs.push({
                    message:`Signed By ${cp.name}`,
                    createdBy: cp.name || null,  // Use authenticated user's ID if available
                    createdAt: new Date()
                });
                msg.push(message);
            }
        }

        let allSigned = true;
        for (const refId of contract.counterparty_name) {
                if (!contract.counterparty_signature.includes(refId)) {
                    allSigned = false;
                    break;
                }
        }
        if (allSigned&&contract.status!=='Executed') {
            contract.status = 'Executed';
            contract.logs.push({
                message:"Contract Executed",
                createdBy: '',  // Use authenticated user's ID if available
                createdAt: new Date()
            });
            msg.push("Contract Executed");
            
        }
        else if(status &&contract.status!=='Executed'){
            contract.status = status;
            contract.logs.push({
                message:`Contract's Status is changed to ${status}`,
                createdBy: '',  // Use authenticated user's ID if available
                createdAt: new Date()
            });
            msg.push(`Contract's Status is changed to ${status}`);
        }

        // Update status logic

        await contract.save();
      
        for(const info of msg){
            await LogModel.create({
                createdBy: contract.owner,
                contractId: contractId,
                counterpartiesId: cp_id ?? undefined,
                status: contract.status,
                organization_entity: contract.organization_entity,
                contract_type: contract.contract_type,
                message:info
            })
        }
        

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
