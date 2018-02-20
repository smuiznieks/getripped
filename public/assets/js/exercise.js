// Tool Tip for Share Button
$(document).ready(function () {
    $('.tooltipped').tooltip({ delay: 50 });
});


$('.exercise-btn').on('click', function (event) {
    event.preventDefault();

    var queryURL = 'https://localhost:8080/api/exercises?';
    var exercise = $(this).attr("data-exercise")


    $.ajax('/api/exercises', {
        url: queryURL,
        method: 'GET',
        data: exercise
    }).done(function (response) {
        $('#workouts').text(JSON.stringify(response));
        console.log(response);
    });

});