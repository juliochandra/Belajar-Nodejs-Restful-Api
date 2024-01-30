const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validate = require("../lib/validation");
const schema = require("./userSchema");
const repository = require("./userRepository");
const ErrorHandling = require("../error/ErrorHandling");

const secret = process.env.JWT_SECRET;
const expired = process.env.JWT_EXPIRED;

const register = async (request) => {
     const data = validate(request, schema.register);

     const user = await repository.findUser(data.username);

     if (user.length > 0) {
          throw new ErrorHandling(400, "Username already exist");
     }

     data.password = await bcrypt.hash(data.password, 10);

     const result = await repository.insertUser(data);

     const response = {
          id: result[0].id,
          username: result[0].username,
          name: result[0].name,
     };

     return response;
};

const login = async (request) => {
     const data = validate(request, schema.login);

     const user = await repository.findUser(data.username);

     if (!user.length > 0) {
          throw new ErrorHandling(401, "username or password is wrong");
     }

     const isPasswordValid = await bcrypt.compare(
          data.password,
          user[0].password
     );

     if (!isPasswordValid) {
          throw new ErrorHandling(401, "username or password is wrong");
     }

     const token = jwt.sign(
          {
               id: user[0].id,
          },
          secret,
          {
               expiresIn: expired,
          }
     );

     const response = { token };

     return response;
};

const get = async (request) => {
     const data = validate(request, schema.get);

     const user = await repository.findUserById(data.id);

     if (!user.length > 0) {
          throw new ErrorHandling(404, "User not found");
     }

     const response = {
          id: user[0].id,
          username: user[0].username,
          name: user[0].name,
     };

     return response;
};

const update = async (request) => {
     const data = validate(request, schema.update);

     const user = await repository.findUserById(data.id);

     if (!user.length > 0) {
          throw new ErrorHandling(404, "User not found");
     }
     const dataUpdate = {
          id: data.id,
     };

     if (data.password) {
          dataUpdate.password = await bcrypt.hash(data.password, 10);
     }
     if (data.name) {
          dataUpdate.name = data.name;
     }

     const result = await repository.updateUser(dataUpdate);

     const response = {
          id: result[0].id,
          username: result[0].username,
          name: result[0].name,
     };

     return response;
};

const logout = async (request) => {
     const data = validate(request, schema.logout);

     const user = await repository.findUserById(data.id);

     if (!user.length > 0) {
          throw new ErrorHandling(404, "User not found");
     }

     const token = null;

     const response = { token };

     return response;
};

module.exports = {
     register,
     login,
     get,
     update,
     logout,
};
