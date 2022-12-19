const express = require("express");
const Role = require("../../models/Role");
const User = require("../../models/User");

const app = express.Router();

app.route("/:email").get(async (req, res) => {
  let user = null;
  const userReturned = await User.findByPk(req.params.email);
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

  res.send({ response_code, response_message, user });
});
module.exports = app;
