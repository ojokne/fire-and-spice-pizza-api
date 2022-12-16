const express = require("express");
const add = require("./add");
const app = express.Router();
app.use(add);

module.exports = app;
