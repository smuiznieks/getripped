// Import models
var db = require('../models');

module.exports = function(app) {
    // GET all user information
    // app.get('/api/user', function(req, res) {
    //     db.User.findAll({}).then(function(data) {
    //         var userData = {
    //             user: data 
    //         };
    //         console.log(userData);
    //     });
    // });

    // CREATE new user
    app.get("/newuser", function (req, res) {
        res.render('newuser');
    });

    app.get('/api/user', function(req, res) {
        db.User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }).then(function(newUser) {
            res.json(newUser);
        }).catch(function(err) {
            res.json(err);
        });
    });
};