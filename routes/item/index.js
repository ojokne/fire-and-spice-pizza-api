const express = require("express");
const add = require("./add");
const update = require("./update");
// const items = require("./users");
// const item = require("./user");
// const deleteItem = require("./delete");
const app = express.Router();

app.use(add);
app.use(update);
// app.use(users);
// app.use(user);
// app.use(deleteUser);
module.exports = app;
