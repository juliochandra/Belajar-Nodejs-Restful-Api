const validate = require("../lib/validation");
const ErrorHandling = require("../error/ErrorHandling");
const schema = require("./contactSchema");
const repository = require("./contactRepository");

const create = async (request) => {
     const data = validate(request, schema.create);

     const user = await repository.findUserById(data.user_id);
     if (!user.length > 0) {
          throw new ErrorHandling(404, "User not found");
     }

     const result = await repository.insertContact(data);
     const response = {
          id: result[0].id,
          first_name: result[0].first_name,
          last_name: result[0].last_name,
          email: result[0].email,
          phone: result[0].phone,
     };

     return response;
};

const get = async (request) => {
     const data = validate(request, schema.get);

     const user = await repository.findUserById(data.user_id);
     if (!user.length > 0) {
          throw new ErrorHandling(404, "User not found");
     }

     const result = await repository.findContactByUserId(data);
     if (!result.length > 0) {
          throw new ErrorHandling(404, "Contact not found");
     }

     return result;
};

const update = async (request) => {
     const data = validate(request, schema.update);

     const user = await repository.findUserById(data.user_id);
     if (!user.length > 0) {
          throw new ErrorHandling(404, "User not found");
     }

     const contact = await repository.findContactByUserId(data);
     if (!contact.length > 0) {
          throw new ErrorHandling(404, "Contact not found");
     }

     const result = await repository.updateContact(data);

     return result;
};

const remove = async (request) => {
     const data = validate(request, schema.remove);

     const user = await repository.findUserById(data.user_id);
     if (!user.length > 0) {
          throw new ErrorHandling(404, "User not found");
     }

     const contact = await repository.findContactByUserId(data);
     if (!contact.length > 0) {
          throw new ErrorHandling(404, "Contact not found");
     }

     const result = await repository.removeContact(data);

     return result;
};

const search = async (request) => {
     const data = validate(request, schema.search);

     const user = await repository.findUserById(data.user_id);
     if (!user.length > 0) {
          throw new ErrorHandling(404, "User not found");
     }

     const filter = {};
     filter.user_id = data.user_id;
     if (data.name) {
          filter.first_name = data.name;
          filter.last_name = data.name;
     }
     if (data.email) {
          filter.email = data.email;
     }
     if (data.phone) {
          filter.phone = data.phone;
     }

     if (!data.page) {
          filter.page = 1;
     } else {
          filter.page = data.page;
     }

     if (!data.size) {
          filter.size = 10;
     } else {
          filter.size = data.size;
     }

     const limit = filter.size;
     const offset = (filter.page - 1) * limit;

     const contact = await repository.searchContact(filter, limit, offset);
     const constactCount = await repository.searchContactCount(filter);

     const result = {
          contact,
          paging: {
               page: filter.page,
               size: filter.size,
               total_pages: Math.ceil(
                    constactCount[0].count / filter.size
               ),
               total_items: parseInt(constactCount[0].count, 10),
          },
     };

     return result;
};

module.exports = {
     create,
     get,
     update,
     remove,
     search,
};
