const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");

server.use(express.json(), cors(), helmet());

const usersRouter = require("../users/users-router.js");
const welcomeRouter = require("../welcome/welcome-router.js");

server.use("/", welcomeRouter);
server.use("/users", usersRouter);

module.exports = server;
