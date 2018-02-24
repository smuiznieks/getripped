$(function () {
    $('#createAccount').on('click', function (event) {
        $('#passwordError').empty();
        event.preventDefault();
        if ($('#passwordInput').val() !== $('#passwordConfirm').val()) {
            console.log('Passwords must match.');
            $('#passwordError').append('<h6>Passwords must match.</h6><br />');
            return;
        }

        var newUser = {
            username: $('#usernameInput').val().trim(),
            email: $('#emailInput').val().trim(),
            password: $('#passwordInput').val().trim()
        };

        $.post('/api/user', newUser).then(
            function () {
                console.log('New user account successful.');
            }
        );
    });

    $('#login').on('click', function(event) {
        event.preventDefault();

        var existingUser = {
            validUser: $('#username').val().trim(),
            validPassword: $('#password').val().trim()
        };

        $.get('/api/user', existingUser).then(
            function() {
                console.log('User login successful.')
            }
        );
    });
});