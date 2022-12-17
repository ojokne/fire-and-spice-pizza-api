const express = require("express");
const add = require("./add");
const app = express.Router();
const deleteRole = require("./delete");

app.use(add);
app.use(deleteRole);
module.exports = app;
