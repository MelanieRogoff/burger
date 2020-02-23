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

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "ilovemusic3",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
