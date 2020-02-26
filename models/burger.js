const burger = require("./../config/orm"); //importing the ORM

burger.selectAll()
    .then(function(data) {
        console.log(data);
    })

burger.insertOne("Kosher Veggie Burger", true)
    .then(function(data) {
        console.log(data);
    })

burger.updateOne(false, "Kosher Veggie Burger") 
    .then(function(data) { 
        console.log(data);
    })
