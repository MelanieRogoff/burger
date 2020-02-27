const orm = require("../config/orm"); //importing the ORM

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb (res); //we need to put function(res) for the cb so it'll call back the res
        })
    },

    insertOne: function(col1Name, col2Name, val1, val2, cb) {
        //don't put exact names b/c the controller does that 
        orm.insertOne("burgers", col1Name, col2Name, val1, val2, function(res) {
            cb(res);
        }) 
    },

    updateOne: function(col2Name, col2Val, col1Name, col1Val, cb) {
        orm.updateOne("burgers", col2Name, col2Val, col1Name, col1Val, function(res) {
            cb(res);
        })
    }
}

module.exports = burger;