const express = require("express");
const db = require("../../db");
const Role = require("../../models/Role");
const User = require("../../models/User");
const bcrypt = require("bcrypt");
const app = express.Router();

app.route("/add").post(async (req, res) => {
  let response_code = 1;
  let response_message = "successfully created";
  if (
    !(
      req.body.hasOwnProperty("email") &&
      req.body.hasOwnProperty("firstName") &&
      req.body.hasOwnProperty("middleName") &&
      req.body.hasOwnProperty("lastName") &&
      req.body.hasOwnProperty("roleNumber") &&
      req.body.hasOwnProperty("password")
    )
  ) {
    response_message = "Add all fields";
    response_code = 0;
  } else {
    if (
      req.body.email.trim().length < 1 ||
      req.body.firstName.trim().length < 1 ||
      req.body.middleName.trim().length < 1 ||
      req.body.lastName.trim().length < 1 ||
      req.body.roleNumber.trim().length < 1 ||
      req.body.password.trim().length < 1
    ) {
      response_message = "populate all fields";
      response_code = 2;
    } else {
      let user = await User.findByPk(req.body.email.trim());
      if (user) {
        response_message = "Resource already exists";
        response_code = 5;
      } else {
        let role = await Role.findByPk(parseInt(req.body.roleNumber.trim()));
        if (role) {
          const hash = bcrypt.hashSync(req.body.password.trim(), 10);
          await User.create({
            email: req.body.email.trim(),
            firstName: req.body.firstName.trim(),
            middleName: req.body.middleName.trim(),
            lastName: req.body.lastName.trim(),
            roleNumber: parseInt(req.body.roleNumber.trim()),
            password: hash,
          });
        } else {
          response_message =
            "Foreign key constraint failed. Role does not exist";
          response_code = 6;
        }
      }
    }
  }
  res.json({ response_code, response_message });
});

module.exports = app;
