const HttpStatus = {
  OK: 200,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  CREATED: 201,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
};

class ApiResponse {
  static SUCCESS = 'success';
  static ERROR = 'failed';
  static GENERIC_ERROR_MESSAGE = 'An error occurred while processing the request';

  static OTP_TIME_LIMIT = 'Time limit exceeds please resend Otp';
  static OTP_INVALID = 'invalid Otp!';
  static OTP_VERIFIED = 'Mobile Number Verified Successfully';
  static OTP_NOT_VERIFIED = 'Mobile Number Not Verified';

  static FILE_MISSING = "File is missing in the request";
  static INVALID_FORMAT = "Please upload a valid file format.";
  static FILE_SIZE_EXCEED = "File size exceeds the limit of";
  static FILE_UPLOAD_FAIL = "Failed to upload file to s3";
  static CATEGORY_MISSING = "Please provide the category.";
  static MEDIA_TYPE_MISSING = "Please provide the media type. It can be Video or Img.";
}

module.exports = { HttpStatus, ApiResponse };
