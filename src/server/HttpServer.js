const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const connectToDatabase = require('../config/db');
const GeminiContractBot  = require('../spoty/toolManager/contractBot');

const { PdfController } = require('../controllers/PdfController');
const { UserController } = require('../controllers/UserController');
const { CounterpartiesController } = require('../controllers/CounterpartyController');
const { WaSpotyController } = require('../spoty/wa-bot');
const { LogController } = require('../controllers/LogController');
const { initializeContractContext } = require('../spoty/service/initializeContractContext.js');
const contractBotRouter = require('../spoty/toolManager/router');
const { getContractData } = require('../spoty/service/ContractData.js');

class HttpServer {
  constructor(port) {
    this.port = port;
    this.app = express();
    this.server = http.createServer(this.app);
    this.configureMiddleware();
    this.configureRoutes();
    this.connectToDatabase();
  }

  async connectToDatabase() {
    try {
      await connectToDatabase();
    } catch (error) {
      console.error("Failed to connect to the database:", error);
    }
  }

  configureMiddleware() {
    this.app.use(
      cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization", "*"],
      })
    );
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  configureRoutes() {
  
    const pdfController = new PdfController();
    const userController =new UserController();
    const counterpartyController=new CounterpartiesController();
    const waSpotyController = new WaSpotyController();
    const logController = new LogController();

    this.app.use("/user",userController.router);
    this.app.use("/contracts", pdfController.router);
    this.app.use("/counterparties", counterpartyController.router);
    this.app.use('/api', waSpotyController.router);
    this.app.use("/logs",logController.router);
    this.app.use('/chat', contractBotRouter)
    
  }

  start() {
    this.server.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
      
      // Initialize contract context with default data
      initializeContractContext();

    });
  }
}

module.exports = { HttpServer };
