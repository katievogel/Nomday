var db = require("../models");
require("../config/connection.js");

module.exports = {
    findOrCreate: function (app) {
        app.post("/adduser", function (req, res){
            db.Users.findOrCreate({ where: { userName: req.body.username }, defaults: {userID: req.body.userID, user_email: req.body.email}}).then(([users, created])=> {
                console.log(users.get({
                    plain: true
                }))
                console.log(created);

            
            })
        })
    }
};
