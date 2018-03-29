$(document).ready(function(){

    var topics = ["playerunknowns-battlegrounds", "csgo", "overwatch", "cuphead", "league-of-legends"];

    for (var i = 0; i < topics.length; i++) {
        var gameButton = $('<button class="btn btn-info">' + topics[i] + '</button>');
        $("#buttons-div").append(gameButton);
    }

    var APIKey = "e8D0QWlhWgoTWk5oe4mfR2jvL4DpNNFw";
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + APIKey + "&q=csgo&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

        var results = response.data;
        // console.log(results);

        for (var i = 0; i < results.length; i++) {
            console.log(results);
            console.log(results[i].rating);
            console.log(results[i].images.fixed_height);
        }
    });
});