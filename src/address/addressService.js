const validate = require("../lib/validation");
const ErrorHandling = require("../error/ErrorHandling");
const schema = require("./addressSchema");
const repository = require("./addressRepository");

const create = async (request) => {
     const data = validate(request, schema.create);
     const contact = await repository.findContact({
          id: data.contact_id,
          user_id: data.user_id,
     });
     if (!contact.length > 0) {
          throw new ErrorHandling(404, "Contact not found");
     }

     delete data.user_id;
     const result = await repository.insertAddress(data);

     return result[0];
};

const get = async (request) => {
     const data = validate(request, schema.get);
     const contact = await repository.findContact({
          id: data.contact_id,
          user_id: data.user_id,
     });
     if (!contact.length > 0) {
          throw new ErrorHandling(404, "Contact not found");
     }

     delete data.user_id;
     const result = await repository.findAddressByContactId(data);
     if (!result.length > 0) {
          throw new ErrorHandling(404, "Address not found");
     }

     return result[0];
};

const update = async (request) => {
     const data = validate(request, schema.update);

     const contact = await repository.findContact({
          id: data.contact_id,
          user_id: data.user_id,
     });
     if (!contact.length > 0) {
          throw new ErrorHandling(404, "Contact not found");
     }
     delete data.user_id;
     const address = await repository.findAddressByContactId({
          contact_id: data.contact_id,
     });
     if (!address.length > 0) {
          throw new ErrorHandling(404, "Address not found");
     }

     const result = await repository.updateAddress(data);

     return result[0];
};

const remove = async (request) => {
     const data = validate(request, schema.remove);

     const contact = await repository.findContact({
          id: data.contact_id,
          user_id: data.user_id,
     });
     if (!contact.length > 0) {
          throw new ErrorHandling(404, "Contact not found");
     }

     delete data.user_id;
     const address = await repository.findAddressByContactId(data);
     if (!address.length > 0) {
          throw new ErrorHandling(404, "Address not found");
     }

     delete data.user_id;
     const result = await repository.removeAddress(data);

     return result[0];
};

const list = async (request) => {
     const data = validate(request, schema.list);

     const contact = await repository.findContact({
          id: data.contact_id,
          user_id: data.user_id,
     });
     if (!contact.length > 0) {
          throw new ErrorHandling(404, "Contact not found");
     }

     delete data.user_id;
     const result = await repository.findAddressByContactId(data);

     return result;
};

module.exports = {
     create,
     get,
     update,
     remove,
     list,
};
