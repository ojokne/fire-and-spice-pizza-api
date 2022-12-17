const express = require("express");
const Role = require("../../models/Role");

const app = express.Router();

app.route("/add").post(async (req, res) => {
  response_code = 1;
  response_message = "successfully created";
  if (!req.body.hasOwnProperty("roleName")) {
    response_message = " Add all fields";
    response_code = 0;
  } else {
    if (req.body.roleName.trim().length < 1) {
      response_message = " populate all fields";
      response_code = 2;
    } else {
      const role = Role.create({ roleName: "Admin" });
    }
  }
  res.json({ response_code, response_message });
});
module.exports = app;
