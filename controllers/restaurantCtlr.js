var db = require("../models");
require("../config/connection.js");

module.exports = {
    findAll: function (app) {
        // Load index page
        app.get("/", function (req, res) {
            res.render("index", { fave_lunch_db: [] });
        });
    },
//find a restaurant already in the database, if it does not exist, give option to add. if it does exist, update with latest visit date and add new record with rating to lunch spots db.  Add new entry to user db new or not.
    findOneAndUpdate: function (app) {
        app.post("/add_spot", function (req, res){
            db.LunchSpot.findOne({ where: { place_name: req.body.restaurant }}).then(function(dbLunchSpot){
                var addRestToUserDB = dbLunchSpot.place_name;

                addRestToUserDB(req.body.place_name, addRestToUserDB);

                db.Users.findAll().then(function(tableRes){
                    res.render("index", {
                        lunchSpots: [dbLunchSpot.dataValues],
                        Users: tableRes 
                    });
                });
            });
        });
        function addNewRestToDB(restaurant, addRestToUserDB) {
            db.Users.create({
                restaurant: place_name,

            })
        }
    }
};
