/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
     return knex.schema.createTable("address", (table) => {
          table.uuid("id")
               .primary()
               .defaultTo(knex.raw("uuid_generate_v4()"));
          table.string("street", 200);
          table.string("city", 100);
          table.string("province", 100);
          table.string("country", 100).notNullable();
          table.string("postal_code", 100).notNullable();
          table.uuid("contact_id")
               .notNullable()
               .references("id")
               .inTable("contacts")
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
     return knex.schema.dropTable("address");
};
