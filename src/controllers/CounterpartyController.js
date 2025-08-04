const { Router } = require('express');

const { HttpStatus } = require('../constants/constants');
const CounterpartiesModel = require('../models/CounterpartiesModel');
const { default: mongoose } = require('mongoose');


class CounterpartiesController {
  constructor() {
    this.router = Router();

    this.configureRoutes();
  }

  configureRoutes() {
    this.router.post('/create', this.createCounterparties);
    this.router.get('/',this.getCounterparties);
    this.router.get('/:id',this.getCounterparties);
    
  }

  createCounterparties = async (req, res) => {
    try {
      const {name,email}=req.body;
      if (!name || !email ) {
        apiResponseDto.status = ApiResponse.ERROR;
        apiResponseDto.message = "Please Enter name and email";
        apiResponseDto.responseCode = HttpStatus.BAD_REQUEST;
        return apiResponseDto;
      }
      const response=new CounterpartiesModel({ name, email});
      await response.save();
      return res.status(response.responseCode ?? HttpStatus.OK).json(response);
    } catch (error) {
      console.error("Error in creating counterparties", error);
      res.status(500).json({ message: "Failed to create counterparties!" });
    }
  };

  getCounterparties = async (req, res) => {
        try {
            const { id } = req.params;
            let counterparties = [];

            if (id) {
                if (!mongoose.Types.ObjectId.isValid(id)) {
                    return res.status(400).json({ message: "Invalid counterparty ID" });
                }
                const counterparty=await CounterpartiesModel.findById(id);
              
                if (!counterparty) {
                    return res.status(404).json({ message: "counterparty not found" });
                }
                counterparties = [counterparty]; // make it array for uniformity below
            } else {
                counterparties = await CounterpartiesModel.find()
                if (counterparties.length === 0) {
                    return res.status(404).json({ message: "No counterparty found" });
                }
            }

            return res.status(200).json({
                status: "SUCCESS",
                message: id ? "counterparty fetched successfully" : "All counterparties fetched successfully",
                data: id ? counterparties[0] : counterparties
            });

        } catch (error) {
            console.error("Error in fetching counterparty", error);
            res.status(500).json({ message: "Failed to get counterparty!" });
        }
    };
  
}

module.exports = { CounterpartiesController };
