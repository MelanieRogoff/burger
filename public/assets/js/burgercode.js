$(function() {
    $(".change-devoured").on("click", function (event) {
        event.preventDefault();
        const id = $(this).data("id");
        const newlyDevoured = $(this).data("newlyDevoured");
        const newlyDevouredState = {
            devoured: newlyDevoured
        };
        
        $.ajax("/api/burgers/" + id, { //UPDATE request
            type: "PUT",
            data: newlyDevouredState
        }). then(function() {
                console.log("Changed devoured state to", newlyDevoured);
                location.reload(); //this reloads page w/updated value
            }
        )
    });

$(".create-form").on("submit", function(event) {
    event.preventDefault();
    const newBurger = {
        name: $("#burg").val().trim(),
        devoured: $("[name=devoured]:checked").val()
    };

    $.ajax("/api/burgers", { //CREATING NEW BURGER
        type: "POST", 
        data: newBurger
    }). then(function() {
            console.log("Created a new burger!");
            location.reload();
        }
    );
});

});
