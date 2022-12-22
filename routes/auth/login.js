const express = require("express");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const app = express.Router();

app.route("/login").post(async (req, res) => {
  let response_code = 1;
  let response_message = "successfully created";
  let token = "";
  if (
    !(req.body.hasOwnProperty("email") && req.body.hasOwnProperty("password"))
  ) {
    response_message = "Add all fields";
    response_code = 0;
  } else {
    if (
      req.body.email.trim().length < 1 ||
      req.body.password.trim().length < 1
    ) {
      response_message = "populate all fields";
      response_code = 2;
    } else {
      const user = await User.findByPk(req.body.email.trim());
      if (user) {
        token = jwt.sign({ email: user.email }, process.env.SECRET_KEY);
        decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log(decoded);
      } else {
        response_message = "Not found";
        response_code = 3;
      }
    }
  }
  res.json({ response_code, response_message, token });
});
module.exports = app;
