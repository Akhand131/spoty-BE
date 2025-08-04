const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { ApiResponseDto } = require('../Dto/ApiResponseDto');
const { ApiResponse, HttpStatus } = require('../constants/constants');
const { UserModel } = require('../models/UserModel');



class UserService {
  async registerUser(name, email, password,mobileno) {
    const apiResponseDto = new ApiResponseDto();
    try {
      if (!name || !email || !password ||!mobileno) {
        apiResponseDto.status = ApiResponse.ERROR;
        apiResponseDto.message = "Please Enter required informations";
        apiResponseDto.responseCode = HttpStatus.BAD_REQUEST;
        return apiResponseDto;
      }
      const user = await UserModel.findOne({ email: email });
      if (user) {
        apiResponseDto.status = ApiResponse.ERROR;
        apiResponseDto.message = "User Already exists";
        apiResponseDto.responseCode = HttpStatus.BAD_REQUEST;
        return apiResponseDto;
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new UserModel({ name, email, password: hashedPassword,mobileno:mobileno });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

      apiResponseDto.status = ApiResponse.SUCCESS;
      apiResponseDto.message = 'User registered successfully';
      apiResponseDto.responseCode = HttpStatus.CREATED;
      apiResponseDto.data = {
        token,
        data: newUser,
        name: newUser.name
      };
      return apiResponseDto;
    } catch (error) {
      console.log("Error :", error);
      apiResponseDto.status = ApiResponse.ERROR;
      apiResponseDto.message = ApiResponse.GENERIC_ERROR_MESSAGE;
      apiResponseDto.responseCode = HttpStatus.INTERNAL_SERVER_ERROR;
      return apiResponseDto;
    }
  }

  async loginUser(email, password) {
    const apiResponseDto = new ApiResponseDto();
    try {
      if (!email || !password) {
        apiResponseDto.status = ApiResponse.ERROR;
        apiResponseDto.message = "Please Enter required informations";
        apiResponseDto.responseCode = HttpStatus.BAD_REQUEST;
        return apiResponseDto;
      }
      const user = await UserModel.findOne({ email: email });
      if (!user) {
        apiResponseDto.status = ApiResponse.ERROR;
        apiResponseDto.message = "User Not Found";
        apiResponseDto.responseCode = HttpStatus.NOT_FOUND;
        return apiResponseDto;
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        apiResponseDto.status = ApiResponse.ERROR;
        apiResponseDto.message = "Wrong Password";
        apiResponseDto.responseCode = HttpStatus.BAD_REQUEST;
        return apiResponseDto;
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

      apiResponseDto.status = ApiResponse.SUCCESS;
      apiResponseDto.message = 'User Logged in successfully';
      apiResponseDto.responseCode = HttpStatus.CREATED;
      apiResponseDto.data = {
        token,
        data: user,
        name: user.name
      };
      return apiResponseDto;
    } catch (error) {
      console.log("Error :", error);
      apiResponseDto.status = ApiResponse.ERROR;
      apiResponseDto.message = ApiResponse.GENERIC_ERROR_MESSAGE;
      apiResponseDto.responseCode = HttpStatus.INTERNAL_SERVER_ERROR;
      return apiResponseDto;
    }
  }

  
}

module.exports = { UserService };
