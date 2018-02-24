// Import models
var db = require('../models');

module.exports = function(app) {
    // GET display user information
    app.get('/profile/:id', function(req, res) {
        db.User.findOne({
            where: { id: req.session.uid },
            // include: [db.Profile]
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
            console.log(data.dataValues.profName);
            console.log(data.dataValues.profLocation);
            res.render('profile', { profName: data.dataValues.profName, profLocation: data.dataValues.profLocation });
        });
    });

    // Display updated profile info
    // app.get('/api/profile/:id', function(req, res) {
    //     db.Profile.findAll({
    //         limit: 1,
    //         where: { id: req.session.uid },
    //         order: [ [ 'createdAt', 'DESC' ]],
    //     }).then(function(data) {
    //         console.log(data);
    //         res.render('profile', { username: data.dataValues.username });
    //     });
    // });
};