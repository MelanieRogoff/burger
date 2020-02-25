const connection = require('./connection'); 

connection.query('SELECT * FROM burgers', function (err, res) {
    console.log("Burger Name: " + res[0].burger_name, "Devoured: " + res[0].devoured);
})

const burgerFunctions = {
 selectAll: function() {
    const select = "SELECT * FROM burgers";
    
    return new Promise(function(resolve, reject) {
        connection.query(select, function(err, data) {
            if (err) reject (err);
            resolve(data);
        });
    })
},
    insertOne: function(burger_name, devoured) {
        const inserts = `INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)`;

        return new Promise(function(resolve, reject) {
            connection.query(inserts, [burger_name, devoured], function(err, data) {
                if (err) reject (err);
                resolve(data);
            });
        })
},

    updateOne: function(devoured, burger_name) { //setting devoured to be true here
        const updates = `UPDATE burgers SET devoured = ? WHERE burger_name = ?`;

        return new Promise(function(resolve, reject) {
            connection.query(updates, [devoured, burger_name], function(err, data) {
                if (err) reject (err);
                resolve(data);
            });
        })
}
}
module.exports = burgerFunctions; //export the burgerFunctions object of functions