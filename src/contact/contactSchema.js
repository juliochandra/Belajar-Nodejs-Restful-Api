const joi = require("joi");

const create = joi.object({
     user_id: joi.string().guid({ version: "uuidv4" }).required(),
     first_name: joi.string().max(100).required(),
     last_name: joi.string().max(100),
     email: joi.string().max(200),
     phone: joi.string().max(100),
});

const get = joi.object({
     id: joi.string().guid({ version: "uuidv4" }).required(),
     user_id: joi.string().guid({ version: "uuidv4" }).required(),
});

const update = joi.object({
     id: joi.string().guid({ version: "uuidv4" }).required(),
     user_id: joi.string().guid({ version: "uuidv4" }).required(),
     first_name: joi.string().max(100),
     last_name: joi.string().max(100),
     email: joi.string().max(200),
     phone: joi.string().max(100),
});

const remove = joi.object({
     id: joi.string().guid({ version: "uuidv4" }).required(),
     user_id: joi.string().guid({ version: "uuidv4" }).required(),
});

const search = joi.object({
     user_id: joi.string().guid({ version: "uuidv4" }).required(),
     name: joi.string().max(100).optional(),
     email: joi.string().max(200).optional(),
     phone: joi.string().max(100).optional(),
     page: joi.number().min(1).positive().default(1),
     size: joi.number().min(1).positive().max(100).default(10),
});

module.exports = { create, get, update, remove, search };
