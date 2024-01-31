const db = require("../lib/db");

const findUserById = async (id) => {
     const result = db("users").select(["*"]).where({ id });

     return result;
};

const findContactByUserId = async (data) => {
     const result = db("contacts")
          .select(["*"])
          .where({ id: data.id, user_id: data.user_id });

     return result;
};

const insertContact = async (contactData) => {
     const result = await db("contacts")
          .insert(contactData)
          .returning(["*"]);

     return result;
};

const updateContact = async (contactData) => {
     const result = await db("contacts")
          .update(contactData)
          .where({ id: contactData.id })
          .returning(["*"]);

     return result;
};

const removeContact = async (contactData) => {
     const result = await db("contacts")
          .delete()
          .where({ id: contactData.id })
          .returning(["*"]);

     return result;
};

const searchContact = async (filter, limit, offset) => {
     const result = await db("contacts")
          .select(["*"])
          .where((search) => {
               if (filter.first_name) {
                    search.orWhere(
                         "first_name",
                         "ilike",
                         `%${filter.first_name}%`
                    );
               }
               if (filter.last_name) {
                    search.orWhere(
                         "last_name",
                         "ilike",
                         `%${filter.last_name}%`
                    );
               }
               if (filter.email) {
                    search.orWhere("email", "ilike", `%${filter.email}%`);
               }
               if (filter.phone) {
                    search.orWhere("phone", "ilike", `%${filter.phone}%`);
               }
          })
          .offset(offset)
          .limit(limit);
     return result;
};

const searchContactCount = async (filter) => {
     const result = await db("contacts")
          .count("id")
          .where((search) => {
               if (filter.first_name) {
                    search.orWhere(
                         "first_name",
                         "ilike",
                         `%${filter.first_name}%`
                    );
               }
               if (filter.last_name) {
                    search.orWhere(
                         "last_name",
                         "ilike",
                         `%${filter.last_name}%`
                    );
               }
               if (filter.email) {
                    search.orWhere("email", "ilike", `%${filter.email}%`);
               }
               if (filter.phone) {
                    search.orWhere("phone", "ilike", `%${filter.phone}%`);
               }
          })
          .count();

     return result;
};

module.exports = {
     findUserById,
     findContactByUserId,
     insertContact,
     updateContact,
     removeContact,
     searchContact,
     searchContactCount,
};
