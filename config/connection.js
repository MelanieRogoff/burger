const mysql = require("mysql"); //this page connects Node to MySQL
 
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "ilovemusic3",
  database: "burgers_db"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
      throw err;
  }
  console.log("Connected!");
});

module.exports = connection; //export the connection to use in orm.js