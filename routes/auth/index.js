const express = require("express");
const login = require("./login");

const app = express.Router();

app.use(login);
// app.route("/").get((req, res) => {
//   res.send("Yoooo");
// });

module.exports = app;
