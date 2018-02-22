$(function() {
    // Create new user
    $('#createAccount').on('click', function(event) {
        event.preventDefault();
        if ($('#createPassword').val() !== $('#confirmPassword').val()) {
            console.log('Passwords must match.')
        } else {
            $.ajax('/api/user', {
                type: 'POST',
                data: { username: $('#createUsername').val(), email: $('#createEmail').val(), password: $('#createPassword').val() }
            }).then(
                function() {
                    console.log('Complete');
                }
            );
        }
    });

    // Login 
    $('#login').on('click', function() {

    });
});