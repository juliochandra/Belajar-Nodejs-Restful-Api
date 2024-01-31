const service = require("./userService");

const register = async (req, res, next) => {
     try {
          const request = {
               username: req.body.username,
               password: req.body.password,
               name: req.body.name,
          };

          const response = await service.register(request);

          res.status(201).json({
               success: true,
               data: response,
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

          const response = await service.login(request);

          res.status(200).json({
               success: true,
               data: response,
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

          const response = await service.get(request);

          res.status(200).json({
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

const update = async (req, res, next) => {
     try {
          const request = {
               id: req.user.id,
               username: req.body.username,
               password: req.body.password,
               name: req.body.name,
          };

          const response = await service.update(request);

          res.status(200).json({
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

const logout = async (req, res, next) => {
     try {
          const request = {
               id: req.user.id,
          };

          const response = await service.logout(request);

          res.status(200).json({
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

module.exports = {
     register,
     login,
     get,
     update,
     logout,
};
