const express = require("express");
const Role = require("../../models/Role");

const app = express.Router();

app.route("/add").post(async (req, res) => {
  response_code = 1;
  response_message = "successfully created";
  if (
    !(
      req.body.hasOwnProperty("roleNumber") &&
      req.body.hasOwnProperty("roleName")
    )
  ) {
    response_message = " Add all fields";
    response_code = 0;
  } else {
    if (
      req.body.roleNumber.trim().length < 1 ||
      req.body.roleName.trim().length < 1
    ) {
      response_message = " populate all fields";
      response_code = 2;
    } else {
      let roleReturned = await Role.findByPk(
        parseInt(req.body.roleNumber.trim())
      );
      if (roleReturned) {
        response_message = "Resource already exists";
        response_code = 5;
      } else {
        await Role.create({
          roleNumber: parseInt(req.body.roleNumber.trim()),
          roleName: req.body.roleName.trim(),
        });
      }
    }
  }
  res.json({ response_code, response_message });
});
module.exports = app;
