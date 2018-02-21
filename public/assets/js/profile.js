$(function() {
    $('#submitProfPic').on('click', function(event) {
        event.preventDefault();
        console.log($('#updatePic').val().trim());
        $.ajax('/api/profile', {
            type: 'PUT',
            data: { profPic: $('#updatePic').val().trim() }
        }).then(
            function() {
                location.reload();
            }
        );
    });

    $('#submitName').on('click', function(event) {
        event.preventDefault();
    });

    $('#submitLocation').on('click', function(event) {
        event.preventDefault();
    });
});