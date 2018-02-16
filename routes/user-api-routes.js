// Import models
var db = require('./models');

module.exports = function(app) {
    // GET all user information
    app.get('/api/user', function(req, res) {
        db.User.findAll({}).then(function(data) {
            var userData = {
                user: data 
            };
            console.log(userData);
        });
    });

    // CREATE new user
    app.get('/api/user', function(req, res) {
        db.User.create(req.body).then(function(newUser) {
            
        })
    })
};