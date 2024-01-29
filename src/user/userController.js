const service = require("./userService");

const register = async (req, res, next) => {
     try {
          const request = {
               username: req.body.username,
               password: req.body.password,
               name: req.body.name,
          };

          const result = await service.register(request);

          res.status(201).json({
               success: true,
               data: result,
          });
     } catch (error) {
          next(error);
     }
};

const login = async (req, res, next) => {
     try {
          const request = {
               username: req.body.username,
               password: req.body.password,
          };

          const result = await service.login(request);

          res.status(200).json({
               success: true,
               data: result,
          });
     } catch (error) {
          next(error);
     }
};

const get = async (req, res, next) => {
     try {
          const request = {
               id: req.user.id,
          };
          const result = await service.get(request);
          res.status(200).json({
               success: true,
               data: result,
          });
     } catch (error) {
          next(error);
     }
};

module.exports = {
     register,
     login,
     get,
};
