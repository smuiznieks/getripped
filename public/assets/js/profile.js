$(function() {
    $('#updateProfile').on('click', function(event) {
        event.preventDefault();
        var updatedProfile = {
            profName: $('#updateName').val().trim(),
            profPic: $('#updatePic').val().trim(),
            profLocation: $('#updateLocation').val().trim(),
        };

        $.post('/api/profile/:id', updatedProfile).then(
            function() {
                console.log('Updated.');
            }
        );
    });
});