const ErrorHandling = require("./ErrorHandling");
const logger = require("../lib/logging");

const errorMiddleware = async (err, req, res, next) => {
     try {
          if (!err) {
               next();
               return;
          }
          if (err instanceof ErrorHandling) {
               logger.error(err.message);
               res.status(err.status)
                    .json({
                         message: "error",
                         error: err.message,
                    })
                    .end();
          } else {
               logger.error(err.message);
               res.status(500)
                    .json({
                         message: "internal server error",
                         error: err.message,
                    })
                    .end();
          }
     } catch (error) {
          next(error);
     }
};

module.exports = errorMiddleware;
