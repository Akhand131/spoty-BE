const { HttpStatus } = require('../constants/constants');

class ApiResponseDto {
  /**
   * @param {string} status
   * @param {string} message
   * @param {any} data
   * @param {number} responseCode
   */
  constructor(status = '', message = '', data = null, responseCode = HttpStatus.OK) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.responseCode = responseCode;
  }
}

module.exports = { ApiResponseDto };
