var db = require("../models");
require("../config/connection.js");

module.exports = {
    // Load index page
    findAll: function (app) { 
        app.get("/", function (req, res) {
            res.render("index", { fave_lunch_db: [] });
        });
    },
    //Find a restaurant already in the database; if it does not exist, give option to add. If it does exist, update with user inputs to ratings table and restaurants table. Add new entry to ratings table new or not.
    findOrCreate: function (app) {
        app.post("/addrestaurant", function (req, res){
            db.Restaurants.findOrCreate({ where: { place_name: req.body.restaurant }, defaults: {restID: req.body.restID, place_last_visit_date: req.body.lastVisitDate, place_rank: req.body.rank}}).then(([restaurant, created])=> {
                console.log(restaurant.get({
                    plain: true
                }))
                console.log(created);

                db.Ratings.create({userID: req.body.user, restID: req.body.restID, place_rank: req.body.rank, visit_date: req.body.visitDate, fave_item: req.body.favItem, comments: req.body.comments}).then(function(tableRes){
                    res.render("index", {
                        Ratings: [dbRatings.dataValues],
                        Users: tableRes 
                    });
                });
            });
        });
        
    }
};

