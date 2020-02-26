const express = require("express");
const burger = require("./../models/burger.js");
const router = express.Router(); //creating the router connection

//Creating all our routes
router.get('/', function(req, res) {
    burger.burgerFunctions.selectAll(function(data) {
        const burgObject = {
            burger: data
        };
        console.log(burgObject);
        res.render("index", burgObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.burgerFunctions.insertOne(
        ["burger_name", "devoured"], [req.body.name, req.body.devoured], function(result) {
        res.json({ id: result.insertId }); //send back the id of the new burger
    });
});

router.put("/api/burgers:id", function(req, res) {
    const condition = "id = " + req.params.id;

    console.log("condition", condition);

    burgers.burgerFunctions.updateOne(
        {
            devoured: req.body.devoured
        }, 
        condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end(); //if no rows changed, throw 404 error
        } else {
            res.status(200).end()
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
