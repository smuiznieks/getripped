// Import models
var db = require('../models');

module.exports = function(app) {
    // GET all user information
    app.get('/api/profile', function(req, res) {
        db.Profile.findOne({
            where: {
                
            }
        }).then(function(data) {
            console.log(data);
            var profile = data;
            res.render('profile', { profile: profile });
        });
    });

    // CREATE new user
    // app.get('/api/profile', function(req, res) {
    //     db.User.create(req.body).then(function(newUser) {
    //         res.json(newUser);
    //     }).catch(function(err) {
    //         res.json(err);
    //     })
    // })
};