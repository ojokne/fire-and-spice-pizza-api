const express = require("express");
const Role = require("../../models/Role");

const app = express.Router();

app.route("/:roleNumber").delete(async (req, res) => {
  let response_code = 6;
  let response_message = "successfully deleted";
  if (!req.params.hasOwnProperty("roleNumber")) {
    response_message = " Add all fields";
    response_code = 0;
  } else {
    if (req.params.roleNumber.trim().length < 1) {
      response_message = " populate all fields";
      response_code = 2;
    } else {
      const roleReturned = await Role.findByPk(req.params.roleNumber.trim());
      if (roleReturned) {
        await roleReturned.destroy(), roleReturned.save();
      } else {
        response_message = "Not found";
        response_code = 3;
      }
    }
  }
  res.send({ response_code, response_message });
});
module.exports = app;
