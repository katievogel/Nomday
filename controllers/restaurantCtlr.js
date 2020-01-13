var db = require("../models");
require("../config/connection.js");

module.exports = {
    findAll: function (app) {
        // Load index page
        app.get("/", function (req, res) {
            res.render("index", { fave_lunch_db: [] });
        });
    },

    findOneAndUpdate: function (app) {
        app.post("/add_spot", function (req, res){
            
        })
    }
};
