// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var method = require("method-override");
var bodyParser = require('body-parser');
var path = require("path");

// Create an instance of the express app.
var app = express();

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(method("_method"));

// Specify the port.
var port = 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Routes
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

// Initiate the listener.
app.listen(port);
