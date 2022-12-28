const express = require("express");
const login = require("./login");

const app = express.Router();

app.use(login);

module.exports = app;
