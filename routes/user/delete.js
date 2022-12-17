const express = require("express");
const Role = require("../../models/Role");
const User = require("../../models/User");

const app = express.Router();

app.route("/:email").delete(async (req, res) => {
  let response_code = 6;
  let response_message = "successfully deleted";
  if (!req.params.hasOwnProperty("email")) {
    response_message = " Add all fields";
    response_code = 0;
  } else {
    if (req.params.email.trim().length < 1) {
      response_message = " populate all fields";
      response_code = 2;
    } else {
      const userReturned = await User.findByPk(req.params.email.trim());
      if (userReturned) {
        await userReturned.destroy(), userReturned.save;
      } else {
        response_message = "Not found";
        response_code = 3;
      }
    }
  }
  res.send({ response_code, response_message });
});
module.exports = app;
