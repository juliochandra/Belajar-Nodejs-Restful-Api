const service = require("./addressService");

const create = async (req, res, next) => {
     try {
          const request = {
               contact_id: req.body.contact_id,
               user_id: req.user.id,
               street: req.body.street,
               city: req.body.city,
               province: req.body.province,
               country: req.body.country,
               postal_code: req.body.postal_code,
          };

          const result = await service.create(request);

          const response = {
               success: true,
               id: result.id,
               contact_id: result.contact_id,
               street: result.street,
               city: result.city,
               province: result.province,
               country: result.country,
               postal_code: result.postal_code,
          };

          res.status(201).json(response);
     } catch (error) {
          next(error);
     }
};

const get = async (req, res, next) => {
     try {
          const request = {
               contact_id: req.params.contact_id,
               user_id: req.user.id,
          };

          const result = await service.get(request);

          const response = {
               success: true,
               id: result.id,
               contact_id: result.contact_id,
               street: result.street,
               city: result.city,
               province: result.province,
               country: result.country,
               postal_code: result.postal_code,
          };

          res.status(200).json(response);
     } catch (error) {
          next(error);
     }
};

const update = async (req, res, next) => {
     try {
          const request = {
               id: req.params.id,
               contact_id: req.params.contact_id,
               user_id: req.user.id,
               street: req.body.street,
               city: req.body.city,
               province: req.body.province,
               country: req.body.country,
               postal_code: req.body.postal_code,
          };
          const result = await service.update(request);

          const response = {
               success: true,
               id: result.id,
               contact_id: result.contact_id,
               street: result.street,
               city: result.city,
               province: result.province,
               country: result.country,
               postal_code: result.postal_code,
          };

          res.status(200).json(response);
     } catch (error) {
          next(error);
     }
};

const remove = async (req, res, next) => {
     try {
          const request = {
               id: req.params.id,
               contact_id: req.params.contact_id,
               user_id: req.user.id,
          };

          const result = await service.remove(request);

          const response = {
               success: true,
               id: result.id,
               contact_id: result.contact_id,
               street: result.street,
               city: result.city,
               province: result.province,
               country: result.country,
               postal_code: result.postal_code,
          };

          res.status(200).json(response);
     } catch (error) {
          next(error);
     }
};

const list = async (req, res, next) => {
     try {
          const request = {
               contact_id: req.params.contact_id,
               user_id: req.user.id,
          };

          const result = await service.list(request);

          const response = {
               success: true,
               address: result.map((address) => ({
                    id: address.id,
                    contact_id: address.contact_id,
                    street: address.street,
                    city: address.city,
                    province: address.province,
                    country: address.country,
                    postal_code: address.postal_code,
               })),
          };

          res.status(200).json(response);
     } catch (error) {
          next(error);
     }
};

module.exports = {
     create,
     get,
     update,
     remove,
     list,
};
