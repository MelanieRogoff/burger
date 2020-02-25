const exphbs = require("express-handlebars");
const express = require("express");
const mysql = require("mysql");

const app = express();

// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Use  express.static middleware to serve static content from "public" directory in the app directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
