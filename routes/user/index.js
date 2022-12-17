const express = require("express");
const add = require("./add");
const update = require("./update");
const app = express.Router();
app.use(add);
app.use(update);
module.exports = app;
