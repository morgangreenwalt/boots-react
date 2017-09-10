// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var request = require("request");
var cheerio = require("cheerio");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Requiring our Note and Article models
var Boot = require("./models/boot.js");

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// mLab Heroku Connection
// mongoose.connect("mongodb://heroku_9jhj5q71:uce5pd3fcgh60kbgf996v38116@ds051883.mlab.com:51883/heroku_9jhj5q71");
// var db = mongoose.connection;

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/boot_scraper_R");
var db = mongoose.connection;

// Require in routes
require("./controllers/routes.js")(app);

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
  })

// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose & on port, log a success message
db.once("open", function() {
    console.log("Mongoose connection successful.");
});
app.listen(PORT, function() {
    console.log("App running on port"+PORT+"!");
});