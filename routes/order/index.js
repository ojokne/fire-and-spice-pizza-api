const express = require("express");
const add = require("./add");
// const update = require("./update");
// const deleteItem = require("./delete");
const orders = require("./orders");
const order = require("./order");
const app = express.Router();

app.use(add);
// app.use(update);
// app.use(deleteItem);
app.use(orders);
app.use(order);
module.exports = app;
