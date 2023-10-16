const express = require("express");
const { findUser, findSingleUser } = require("../controller/userCtrl");
const Router = express.Router();

Router.post("/",findUser);
Router.get("/final/:id",findSingleUser);

module.exports = Router;