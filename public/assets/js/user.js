$(function () {

    $('#createAccount').on('click', function (event) {
        event.preventDefault();
        if ($('#passwordInput').val() !== $('#passwordConfirm').val()) {
            console.log('Passwords must match.');
            return;
        }

        var newUser = {
            username: $('#usernameInput').val().trim(),
            email: $('#emailInput').val().trim(),
            password: $('#passwordInput').val().trim()
        };


        $.ajax('/api/user', newUser)
            .then(
                function () {
                    console.log('Complete');
                }
            );
    });

    $('#login').on('click', function(event) {
        event.preventDefault();
        $.ajax('/api/user', {
            type: ""
        }).then();
    });
});