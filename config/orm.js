const connection = require('./connection'); 

const orm = {

selectAll: function(tableName, cb) {  //have to do ?? because it's a table
    connection.query("SELECT * FROM ??", [tableName], function(err, data) {
        cb(data); //need to do a callback to send the data to the models
    })
},
insertOne: function(tableName, col1Name, col2Name, val1, val2, cb) {
    const inserts = 'INSERT INTO ?? (??, ??) VALUES (?, ?)';
        connection.query(inserts, [tableName, col1Name, col2Name, val1, val2], function(err, data) {
            cb(data); //need to do a callback to send the data to the models
        });   
},
updateOne: function(tableName, col2Name, col2Val, col1Name, col1Val, cb) { //setting devoured to be true here
    const updates = 'UPDATE ?? SET ?? = ? WHERE ?? = ?'; //ALWAYS SET TO TRUE B/C OF DEVOUR IT BUTTON
        connection.query(updates, [tableName, col2Name, col2Val, col1Name, col1Val], function(err, data) {
           cb(data); //need to do a callback to send the data to the models
        });
    }
}

module.exports = orm; 