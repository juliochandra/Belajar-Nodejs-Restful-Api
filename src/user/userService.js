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

     return result[0];
};

const login = async (request) => {
     const data = validate(request, schema.login);

     const user = await repository.findUser(data.username);

     if (!user.length > 0) {
          throw new ErrorHandling(401, "username or password is wrong");
     }

     const userPassword = await repository.findPassword(user[0].id);

     const isPasswordValid = await bcrypt.compare(
          data.password,
          userPassword[0].password
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

     const result = { token };

     return result;
};

const get = async (request) => {
     const data = validate(request, schema.get);

     const user = await repository.findUserById(data.id);

     if (!user.length > 0) {
          throw new ErrorHandling(404, "User not found");
     }

     const result = user[0];

     return result;
};

module.exports = {
     register,
     login,
     get,
};
