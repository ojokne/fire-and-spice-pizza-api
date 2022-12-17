const express = require("express");
const User = require("../../models/User");

const app = express.Router();

app.route("/:email").get(async (req, res) => {
  let response_code = 1;
  let response_message = "successfully created";
  let user = null;
  let email = "";
  if (!req.params.hasOwnProperty("email")) {
    response_message = " Add all fields";
    response_code = 0;
  } else {
    if (req.params.email.trim().length < 1) {
      response_message = " populate all fields";
      response_code = 2;
    } else {
      email = req.params.email.trim();
      const userReturned = await User.findByPk(email);
      if (userReturned) {
        user = {
          email: userReturned.email,
          firstName: userReturned.firstName,
          firstName: userReturned.firstName,
          middleName: userReturned.middleName,
          roleNumber: userReturned.roleNumber,
        };
      } else {
        response_message = "Not found";
        response_code = 3;
      }
    }
  }
  res.send({ response_code, response_message, user });
});
module.exports = app;
