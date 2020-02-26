
$(function() {
    $(".change-devoured").on("click", function (event) {
        const id = $(this).data("id");
        const newlyDevoured = $(this).data("newlyDevoured");

        const newlyDevouredState = {
            devoured: newlyDevoured
        };

        //Do PUT (Update) request

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newlyDevouredState
        }). then(
            function() {
                console.log("Changed devoured state to", newlyDevoured);
                location.reload(); //this reloads page w/updated value
            }
        )
    });
});

$(".create-form").on("submit", function(event) {
    event.preventDefault();

    const newBurger = {
        name: $("#burg").val().trim(),
        devoured: $("[names=devoured]:checked").val().trim()
    };

    //POST request

    $.ajax("/api/burgers", {
        type: "POST", 
        data: newBurger
    }). then(
        function() {
            console.log("Created a new burger!");
            location.reload();
        }
    );
});
