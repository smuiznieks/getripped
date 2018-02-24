// Import models
var db = require('../models');

module.exports = function(app) {
    // GET display user information
    app.get('/profile/:id', function(req, res) {
        db.User.findOne({
            where: { id: req.session.uid }
        }).then(function(data) {
            res.render('profile', { username: data.dataValues.username });
        });
    });

    // UPDATE user profile
    app.post('/api/profile/:id', function(req, res) {
        db.Profile.create({
            profName: req.body.profName,
            profPic: req.body.profPic,
            profLocation: req.body.profLocation,
            UserId: req.session.uid
        }).then(function(data) {
            res.render('profile', { profName: data.dataValues.profName });
        });
    });

    // Display updated profile info
    app.get('/api/profile/:id', function(req, res) {
        db.Profile.findOne({
            where: { id: req.session.uid },
            order: [ [ 'createdAt', 'DESC' ]],
        }).then(function(data) {
            console.log(data);
            res.render('profile', { username: data.dataValues.username });
        });
    });
};