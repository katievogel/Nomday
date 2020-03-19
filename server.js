//Dependencies
require("dotenv").config();
var express = require("express");
console.log(">>>> 1")
var router = require("./router");
console.log(">>>> 2")
var bodyParser = require('body-parser');
var cors = require('cors');
var db = require("./models");
console.log(">>>> 3")
var app = express();
console.log(">>>> 4")
var PORT = process.env.PORT || 3000;
console.log(">>>> 5")
// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Routes
console.log(">>>> 6")
app.use(router);
console.log(">>>> 7")

var syncOptions = { force: false };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;