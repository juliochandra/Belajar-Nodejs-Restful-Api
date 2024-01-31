const joi = require("joi");

const create = joi.object({
     contact_id: joi.string().guid({ version: "uuidv4" }).required(),
     user_id: joi.string().guid({ version: "uuidv4" }).required(),
     street: joi.string().max(255).optional(),
     city: joi.string().max(100).optional(),
     province: joi.string().max(100).optional(),
     country: joi.string().max(100).required(),
     postal_code: joi.string().max(10).required(),
});

const get = joi.object({
     contact_id: joi.string().guid({ version: "uuidv4" }).required(),
     user_id: joi.string().guid({ version: "uuidv4" }).required(),
});

const update = joi.object({
     id: joi.string().guid({ version: "uuidv4" }).required(),
     contact_id: joi.string().guid({ version: "uuidv4" }).required(),
     user_id: joi.string().guid({ version: "uuidv4" }).required(),
     street: joi.string().max(255).optional(),
     city: joi.string().max(100).optional(),
     province: joi.string().max(100).optional(),
     country: joi.string().max(100).required(),
     postal_code: joi.string().max(10).required(),
});

const remove = joi.object({
     id: joi.string().guid({ version: "uuidv4" }).required(),
     contact_id: joi.string().guid({ version: "uuidv4" }).required(),
     user_id: joi.string().guid({ version: "uuidv4" }).required(),
});

const list = joi.object({
     contact_id: joi.string().guid({ version: "uuidv4" }).required(),
     user_id: joi.string().guid({ version: "uuidv4" }).required(),
});

module.exports = {
     create,
     get,
     update,
     remove,
     list,
};
