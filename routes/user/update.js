const express = require("express");
const db = require("../../db");
const User = require("../../models/User");
const app = express.Router();

app.route("/update").put(async (req, res) => {
  response_code = 4;
  response_message = "successfully updated";
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
      const user = await User.findByPk(req.body.email.trim());
      console.log(user);
      if (user) {
        user.firstName = req.body.firstName.trim();
        user.middleName = req.body.middleName.trim();
        user.lastName = req.body.lastName.trim();
        user.roleNumber = req.body.roleNumber.trim();
        await user.save();
      } else {
        response_message = "Not found";
        response_code = 3;
      }
    }
  }
  res.json({ response_code, response_message });
});

module.exports = app;
