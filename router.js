var db = require("./models");
require("./config/connection.js");
const router = require("express").Router();
const restaurantCtlr= require("./controllers/restaurantCtlr.js");

router
  .route("/api/restaurants")
  .get(restaurantCtlr.findAll);

  module.exports = router