const express = require("express");
const db = require("../../db");
const User = require("../../models/User");
const Role = require("../../models/Role");
const app = express.Router();

app.route("/add").get(async (req, res) => {
  response_code = 1;
  response_message = "successfully created";
  if (
    !(
      req.body.hasOwnProperty("email") &&
      req.body.hasOwnProperty("firstName") &&
      req.body.hasOwnProperty("middleName") &&
      req.body.hasOwnProperty("lastName") &&
      req.body.hasOwnProperty("roleNumber")
    )
  ) {
    response_message = " Add all fields";
    response_code = 0;
  } else {
    if (
      req.body.email.trim().length < 1 ||
      req.body.firstName.trim().length < 1 ||
      req.body.middleName.trim().length < 1 ||
      req.body.lastName.trim().length < 1 ||
      req.body.roleNumber.trim().length < 1
    ) {
      response_message = " populate all fields";
      response_code = 2;
    } else {
      const user = await User.create({
        email: req.body.email.trim(),
        firstName: req.body.firstName.trim(),
        middleName: req.body.middleName.trim(),
        lastName: req.body.lastName.trim(),
        roleNumber: parseInt(req.body.roleNumber.trim()),
      });
    }
  }
  res.json({ response_code, response_message });
});

module.exports = app;
