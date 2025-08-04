const { Router } = require('express');
const bcrypt = require('bcryptjs');

const { UserService } = require('../services/UserService');
const { HttpStatus } = require('../constants/constants');
const { UserModel } = require('../models/UserModel');

class UserController {
  constructor() {
    this.router = Router();
    this.userService = new UserService();
    this.configureRoutes();
  }

  configureRoutes() {
    this.router.post('/register', this.register);
    this.router.post('/login', this.login);
  }

  register = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const response = await this.userService.registerUser(name, email, password);
      return res.status(response.responseCode ?? HttpStatus.OK).json(response);
    } catch (error) {
      console.error("Error in registering user", error);
      res.status(500).json({ message: "Failed to register User!" });
    }
  };

  login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const response = await this.userService.loginUser(email, password);
      return res.status(response.responseCode ?? HttpStatus.OK).json(response);
    } catch (error) {
      console.error("Error in logging user", error);
      res.status(500).json({ message: "Failed to login User!" });
    }
  };



  
}

module.exports = { UserController };
