const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router(); //creating the router connection

//ROUTES
router.get('/', function(req, res) {  //READ
    burger.selectAll(function(data) {
        const burgObject = {
            burger: data
        };
        res.render("index", burgObject);
    });
});

router.post("/api/burgers", function(req, res) { //CREATE

    burger.insertOne("burger_name", "devoured", req.body.name, false, function(result) { //need to put false here instead of req.body b/c it's in burgercode it saves as a string and putting here makes sure that it's not a string (can't be a string)
        if (result.affectedRows == 0) {
            return res.status(404).end(); //if no rows changed, throw 404 error
        } else {
            res.status(200).end()
        }
    });
});

router.put("/api/burgers:id", function(req, res) { //UPDATE
    const conditionVal = req.params.id; //condition grabs the id column AND its value
    
    burger.updateOne("devoured", req.body.devoured, "id", conditionVal, function(result) {    
        if (result.changedRows == 0) {//do changedRows here because of the update
            return res.status(404).end(); //if no rows changed, throw 404 error
        } else {
            res.status(200).end()
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
