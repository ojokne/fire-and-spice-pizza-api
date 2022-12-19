const express = require("express");
const Role = require("../../models/Role");
const User = require("../../models/User");

const app = express.Router();

app.route("/:email").delete(async (req, res) => {
  let response_code = 6;
  let response_message = "successfully deleted";

  const userReturned = await User.findByPk(req.params.email);
  if (userReturned) {
    await userReturned.destroy();
    userReturned.save();
  } else {
    response_message = "Not found";
    response_code = 3;
  }

  res.send({ response_code, response_message });
});
module.exports = app;
