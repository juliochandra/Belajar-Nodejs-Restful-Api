const service = require("./contactService");

const create = async (req, res, next) => {
     try {
          const request = {
               user_id: req.user.id,
               first_name: req.body.first_name,
               last_name: req.body.last_name,
               email: req.body.email,
               phone: req.body.phone,
          };

          const response = await service.create(request);

          res.status(201).json({
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
               id: req.params.id,
               user_id: req.user.id,
          };

          const result = await service.get(request);

          const response = {
               id: result[0].id,
               first_name: result[0].first_name,
               last_name: result[0].last_name,
               email: result[0].email,
               phone: result[0].phone,
          };

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
               id: req.params.id,
               user_id: req.user.id,
               first_name: req.body.first_name,
               last_name: req.body.last_name,
               email: req.body.email,
               phone: req.body.phone,
          };

          const result = await service.update(request);

          const response = {
               id: result[0].id,
               first_name: result[0].first_name,
               last_name: result[0].last_name,
               email: result[0].email,
               phone: result[0].phone,
          };

          res.status(200).json({
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

const remove = async (req, res, next) => {
     try {
          const request = {
               id: req.params.id,
               user_id: req.user.id,
          };
          const result = await service.remove(request);

          const response = {
               id: result[0].id,
               first_name: result[0].first_name,
               last_name: result[0].last_name,
               email: result[0].email,
               phone: result[0].phone,
          };

          res.status(200).json({
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

const search = async (req, res, next) => {
     try {
          const request = {
               user_id: req.user.id,
               name: req.query.last_name,
               email: req.query.email,
               phone: req.query.phone,
               page: req.query.page,
               size: req.query.size,
          };
          const result = await service.search(request);

          const response = {
               contacts: result.contact.map((contact) => ({
                    id: contact.id,
                    user_id: contact.user_id,
                    first_name: contact.first_name,
                    last_name: contact.last_name,
                    email: contact.email,
                    phone: contact.phone,
               })),
               paging: result.paging,
          };

          res.status(200).json({
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

module.exports = {
     create,
     get,
     update,
     remove,
     search,
};
