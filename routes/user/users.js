const express = require("express");
const Role = require("../../models/Role");
const User = require("../../models/User");
const app = express.Router();
app.route("/").get(async (req, res) => {
  const list = await User.findAll();
  const users = new Array(list.length);
  for (let i = 0; i < list.length; i++) {
    let role = await Role.findByPk(parseInt(list[i].roleNumber));
    let user = {
      email: list[i].email,
      firstName: list[i].firstName,
      firstName: list[i].firstName,
      middleName: list[i].middleName,
      role,
    };
    users[i] = user;
  }

  res.send(users);
});

module.exports = app;
