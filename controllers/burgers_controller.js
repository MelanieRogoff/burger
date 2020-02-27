const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router(); //creating the router connection

//Creating all our routes
router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        const burgObject = {
            burger: data
        };
        res.render("index", burgObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne("burger_name", "devoured", req.body.name, req.body.devoured, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end(); //if no rows changed, throw 404 error
        } else {
            res.status(200).end()
        }
    });
});

router.put("/api/burgers:id", function(req, res) { //UPDATE
    const conditionVal = req.params.id; //condition grabs the id column AND its value

    burger.updateOne("devoured", req.body.devoured, "id", conditionVal, function(result) {     
        if (result.changedRows == 0) {
            return res.status(404).end(); //if no rows changed, throw 404 error
        } else {
            res.status(200).end()
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
