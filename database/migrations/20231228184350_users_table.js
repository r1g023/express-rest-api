exports.up = function (knex) {
  return knex.schema.createTable("users", function (tbl) {
    tbl.increments("id");
    tbl.string("username", 128).notNull().unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
