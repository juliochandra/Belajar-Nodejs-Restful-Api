const ErrorHandling = require("../error/ErrorHandling");

const validate = (request, schema) => {
     const result = schema.validate(request, {
          abortEarly: false,
          allowUnknown: false,
     });
     if (result.error) {
          throw new ErrorHandling(400, result.error.message);
     } else {
          return result.value;
     }
};

module.exports = validate;
