const express = require("express");
const Role = require("../../models/Role");
const User = require("../../models/User");

const app = express.Router();

app.route("/:email").get(async (req, res) => {
  let response_code = 1;
  let response_message = "successfully created";
  let user = null;
  if (!req.params.hasOwnProperty("email")) {
    let response_message = " Add all fields";
    let response_code = 0;
  } else {
    if (req.params.email.trim().length < 1) {
      response_message = " populate all fields";
      response_code = 2;
    } else {
      const userReturned = await User.findByPk(req.params.email.trim());
      if (userReturned) {
        let role = await Role.findByPk(parseInt(userReturned.roleNumber));

        user = {
          email: userReturned.email,
          firstName: userReturned.firstName,
          firstName: userReturned.firstName,
          middleName: userReturned.middleName,
          role,
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
