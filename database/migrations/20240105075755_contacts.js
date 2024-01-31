/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
     return knex.schema.createTable("contacts", (table) => {
          table.uuid("id")
               .primary()
               .defaultTo(knex.raw("uuid_generate_v4()"));
          table.string("first_name", 100).notNullable();
          table.string("last_name", 100);
          table.string("email", 200);
          table.string("phone", 100);
          table.uuid("user_id")
               .notNullable()
               .references("id")
               .inTable("users")
               .onUpdate("CASCADE")
               .onDelete("CASCADE");
          table.timestamp("created_at").defaultTo(knex.fn.now());
          table.timestamp("updated_at").defaultTo(knex.fn.now());
     });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
     return knex.schema.dropTable("contacts");
};
