const ErrorHandling = require("./ErrorHandling");

const errorMiddleware = async (err, req, res, next) => {
     try {
          if (!err) {
               next();
               return;
          }
          if (err instanceof ErrorHandling) {
               res.status(err.status)
                    .json({
                         message: "error",
                         error: err.message,
                    })
                    .end();
          } else {
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
