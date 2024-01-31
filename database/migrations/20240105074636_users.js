/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
     return knex.schema.createTable("users", (table) => {
          table.uuid("id")
               .primary()
               .defaultTo(knex.raw("uuid_generate_v4()"));
          table.string("username", 100).notNullable().unique();
          table.string("password", 100).notNullable();
          table.string("name", 100).notNullable();
          table.timestamp("created_at").defaultTo(knex.fn.now());
          table.timestamp("updated_at").defaultTo(knex.fn.now());
     });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
     return knex.schema.dropTable("users");
};
