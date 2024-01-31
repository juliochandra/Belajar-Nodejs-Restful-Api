const db = require("../lib/db");

const findUser = async (username) => {
     const result = db("users").select(["*"]).where({ username });

     return result;
};

const findUserById = async (id) => {
     const result = db("users").select(["*"]).where({ id });

     return result;
};

const insertUser = async (userData) => {
     const result = await db("users").insert(userData).returning(["*"]);

     return result;
};

const updateUser = async (userData) => {
     const result = await db("users")
          .where({ id: userData.id })
          .update(userData)
          .returning(["*"]);

     return result;
};

module.exports = {
     findUser,
     findUserById,
     insertUser,
     updateUser,
};
