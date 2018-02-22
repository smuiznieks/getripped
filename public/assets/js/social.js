$(function() {
    $('#uploadPost').on('click', function(event) {
        event.preventDefault();
        $.ajax('/api/social', {
            type: 'POST',
            data: { photo: $('#uploadPhoto').val().trim(), caption: $('#uploadCaption').val().trim() }
        }).then(
            function() {
                location.reload();
            }
        );
    });

    $('.modal').modal();     
});
