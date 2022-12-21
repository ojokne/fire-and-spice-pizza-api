const express = require("express");
const add = require("./add");
const orders = require("./orders");
const order = require("./order");
const app = express.Router();

app.use(add);
app.use(orders);
app.use(order);
module.exports = app;
