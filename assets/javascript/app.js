$(document).ready(function(){

    var topics = ["playerunknowns battlegrounds", "csgo", "overwatch", "cuphead", "league of legends"];

    function displayButtons() {
    $("#buttons-div").empty();

        for (var i = 0; i < topics.length; i++) {
            var gameButton = $('<button class="btn btn-info game-btn">' + topics[i] + '</button>');
            $(gameButton).attr("data-name", topics[i]);
            $("#buttons-div").append(gameButton);
        }
    }
    displayButtons();

    function displayGame() {
    
        var APIKey = "e8D0QWlhWgoTWk5oe4mfR2jvL4DpNNFw";
        var gameName = $(this).attr("data-name");
        console.log(gameName);
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + APIKey + "&q=" + gameName + "&limit=10&offset=0&rating=G&lang=en";

        $("#images-div").empty();
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
    
            var results = response.data;
            console.log(results);
    
            for (var i = 0; i < results.length; i++) {
                var imagesDiv = $('<div class="col-md-6">');
    
                var image = $('<img src="' + results[i].images.fixed_height_still.url + '" data-still="' + results[i].images.fixed_height_still.url + '" data-animate="' + results[i].images.fixed_height.url + '" data-state="still" class="image">');
    
                var ratingP = $('<p>Rating: ' + results[i].rating.toUpperCase() + '</p>');
                imagesDiv.append(image);
                imagesDiv.append(ratingP);
                $("#images-div").append(imagesDiv);
            }
    
            $(".image").on("click", function(){
    
                var currentState = $(this).attr("data-state");
                // Default attr state is "still"
    
                if (currentState === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            });
        });
    }

    $("#add-button").on("click", function(event){
        event.preventDefault();
        // Prevents buttons default behavior (submitting form) when clicked

        var gameInput = $("#videoGame").val().trim();
        console.log(gameInput);

        topics.push(gameInput);

        displayButtons();
    });

    $(document).on("click", ".game-btn", displayGame);

});