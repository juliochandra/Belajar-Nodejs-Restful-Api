const db = require("../lib/db");

const findUser = async (username) => {
     const result = db("users")
          .select(["id", "username", "name"])
          .where({ username });

     return result;
};

const findUserById = async (id) => {
     const result = db("users")
          .select(["id", "username", "name"])
          .where({ id });

     return result;
};

const findPassword = async (id) => {
     const result = db("users").select(["password"]).where({ id });

     return result;
};

const insertUser = async (userData) => {
     const result = await db("users")
          .insert(userData)
          .returning(["id", "username", "name"]);

     return result;
};

module.exports = {
     findUser,
     findUserById,
     findPassword,
     insertUser,
};
