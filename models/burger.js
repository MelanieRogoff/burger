const burgerFunctions = require("./../config/orm"); //importing the ORM

burgerFunctions.selectAll()
    .then(function(data) {
        console.log(data);
    })
    .catch(function(err) {
        console.log(err);
    });

burgerFunctions.insertOne("Veggie Burger", false)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(err) {
        console.log(err);
    });

burgerFunctions.updateOne(true, "Veggie Burger") 
    .then(function(data) { //now seems to add & update veggie burgers - needs fixing
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    });