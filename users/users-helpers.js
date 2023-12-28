const db = require("../database/dbConfig.js");

module.exports = {
  get,
  getById,
  addUser,
  getByUsername,
};

function get() {
  return db("users").orderBy("id");
}

function getByUsername(username) {
  return db("users").where({ username }).first();
}

function getById(id) {
  return db("users").where({ id }).first();
}

async function addUser(user) {
  const [newUser] = await db("users").insert(user, ["id", "username"]);
  return newUser;
}
