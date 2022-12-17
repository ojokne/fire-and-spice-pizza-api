const express = require("express");
const add = require("./add");
const update = require("./update");
const users = require("./users");
const app = express.Router();
app.use(add);
app.use(update);
app.use(users);
module.exports = app;
