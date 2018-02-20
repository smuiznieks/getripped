// Tool Tip for Share Button
$(document).ready(function () {
    $('.tooltipped').tooltip({ delay: 50 });
});


$('.exercise-btn').on('click', function (event) {
    event.preventDefault();

    var exercise = $(this).attr("data-exercise");
    var queryURL = 'https://localhost:8080/api/exercises?group=' + exercise;


    $.ajax('/api/exercises', {
        url: queryURL,
        method: 'GET',
    }).done(function (response) {
        // $('#workouts').text(JSON.stringify(response));
        console.log(response);
    });

});

// ----------------------------------------
// ----------------------------------------
// ----------------------------------------


$('.exercise-btn').on("click", function (event) {
    event.preventDefault();

    // Make a newChirp object
    var newGroup = {
        group: $(this).attr("data-exercise")
    };

    console.log(newGroup);

    // Send an AJAX POST-request with jQuery
    $.post("/api/exercise", newGroup)
        // On success, run the following code
        .then(function () {

            var row = $('<div>');
            row.addClass("card");

            row.append('<div class="">' + newChirp.author + " chirped: </p>");
            row.append("<p>" + newChirp.body + "</p>");
            row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");

            $('#workouts').prepend(row);

        });

    // Empty each input box by replacing the value with an empty string
    $("#author").val("");
    $("#chirp-box").val("");
});

// When the page loads, grab all of our chirps
$.get("/api/all", function (data) {

    if (data.length !== 0) {

        for (var i = 0; i < data.length; i++) {

            var row = $("<div>");
            row.addClass("chirp");

            row.append("<p>" + data[i].author + " chirped.. </p>");
            row.append("<p>" + data[i].body + "</p>");
            row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

            $("#chirp-area").prepend(row);

        }

    }

});