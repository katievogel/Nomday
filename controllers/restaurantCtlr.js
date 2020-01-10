var db = require("../models");
require("../config/connection.js");

module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
      res.render("index", { fave_lunch_db: [] });
    });
}
