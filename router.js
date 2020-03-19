var db = require("./models");
require("./config/connection.js");
const router = require("express").Router();
const restaurantCtlr= require("./controllers/restaurantCtlr");
const usersCtlr = require("./controllers/usersCtlr");

router
  .route("/api/restaurants")
  .get(restaurantCtlr.findAll);

router
  .route("/api/adduser")
  .post(usersCtlr.findOrCreate);

module.exports = router

  