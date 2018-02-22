$(function() {

    $('#createAccount').on('click', function(event) {
        event.preventDefault();
        if ($('#passwordInput').val() !== $('#passwordConfirm').val()) {
            console.log('Passwords must match.');
            return;
        } 
        $.ajax('/api/user', {
            type: 'POST',
            data: { username: $('#usernameInput').val().trim(), email: $('#emailInput').val().trim(), password: $('#passwordInput').val().trim() }
        }).then(
            function() {
                console.log('Complete');
            }
        );
    });
});