$(function() {

    $('#createAccount').on('click', function(event) {
        event.preventDefault();
        if ($('#passwordInput').val() !== $('#passwordConfirm').val()) {
            console.log('Passwords must match.');
            return;
        } 
        $.ajax('/api/user', {
            type: 'POST',
            withCredentials: true, 
            data: { username: $('#usernameInput').val().trim(), email: $('#emailInput').val().trim(), password: $('#passwordInput').val().trim() }
        }).then(
            function(response) {
                if(response.errors) 
                    console.log('Not complete');
                else
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