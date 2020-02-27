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
            location.reload();
        }
    );
});

});
