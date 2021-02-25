const express = require("express")
var exphbs = require("express-handlebars")
var mysql = require("mysql")

var app = express()

var PORT = process.env.PORT || 8080
app.use(express.static("public"))

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars");

// Routes
var routes = require("./controls/burgcontrols.js")
app.use(routes);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
})