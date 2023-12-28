exports.seed = function (knex) {
  return knex("users").insert([
    { username: "user1" },
    { username: "user2" },
    { username: "user3" },
  ]);
};
