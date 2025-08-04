const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const connectToDatabase = require('../config/db');

const { PdfController } = require('../controllers/PdfController');
const { UserController } = require('../controllers/UserController');
const { CounterpartiesController } = require('../controllers/CounterpartyController');
const { WaSpotyController } = require('../spoty/wa-bot');

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

    this.app.use("/user",userController.router);
    this.app.use("/contracts", pdfController.router);
    this.app.use("/counterparties", counterpartyController.router);
    this.app.use('/api', waSpotyController.router);
  }

  start() {
    this.server.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
    });
  }
}

module.exports = { HttpServer };
