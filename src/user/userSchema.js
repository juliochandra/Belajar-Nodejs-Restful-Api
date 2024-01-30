const joi = require("joi");

const register = joi.object({
     username: joi.string().max(100).required(),
     password: joi.string().max(100).required(),
     name: joi.string().max(100).required(),
});

const login = joi.object({
     username: joi.string().max(100).required(),
     password: joi.string().max(100).required(),
});

const get = joi.object({
     id: joi.string().guid({ version: "uuidv4" }).required(),
});

const update = joi.object({
     id: joi.string().guid({ version: "uuidv4" }).required(),
     username: joi.string().max(100).optional(),
     password: joi.string().max(100).optional(),
     name: joi.string().max(100).optional(),
});

const logout = joi.object({
     id: joi.string().guid({ version: "uuidv4" }).required(),
});

module.exports = {
     register,
     login,
     get,
     update,
     logout,
};
