// Tool Tip for Share Button
$(document).ready(function () {
    $('.tooltipped').tooltip({ delay: 50 });

    // 
    $('.exercise-btn').on('click', function (event) {
        event.preventDefault();
        $('#workouts').empty();

        var exercise = $(this).attr('data-exercise');

        $.ajax('/api/exercises', {
            data: {
                group: exercise
            },
            method: 'GET',
        }).done(function (response) {
            console.log(response);
            for (var i = 0; i < response.length; i++) {
                var exercise = $('<div class="exercise left-align">');
                exercise.append('<h4>' + response[i].name + '</h4');
                exercise.append(response[i].description + '<hr>');
                $('#workouts').prepend(exercise);
            }

        });
    });

});
