const db = require("../lib/db");

const findContact = async (data) => {
     const result = db("contacts").select(["*"]).where(data);
     return result;
};

const insertAddress = async (data) => {
     const result = await db("address").insert(data).returning(["*"]);

     return result;
};

const findAddressByContactId = async (data) => {
     const result = db("address").select(["*"]).where(data);

     return result;
};

const updateAddress = async (data) => {
     const result = await db("address")
          .update(data)
          .where({ id: data.id })
          .returning(["*"]);

     return result;
};

const removeAddress = async (data) => {
     const result = await db("address")
          .delete()
          .where({ id: data.id })
          .returning(["*"]);

     return result;
};

module.exports = {
     findContact,
     insertAddress,
     findAddressByContactId,
     updateAddress,
     removeAddress,
};
