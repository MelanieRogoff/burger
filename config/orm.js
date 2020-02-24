const connection = require('./connection'); 

connection.query('SELECT * FROM burgers', function (err, res) {
    console.log("Burger Name: " + res[0].burger_name, "Devoured: " + res[0].devoured);
})