// Import models
var db = require('../models');

module.exports = function(app) {
    // GET display user information
    app.get('/profile/:UserId', function(req, res) {
        db.Profile.findOne({
            where: { UserId: req.session.uid }
        }).then(function(data) {
            var profile = data.dataValues;
            res.render('profile', { profPic: profile.profPic, profName: profile.profName, profLocation: profile.profLocation });
        });
    });

    // UPDATE user profile
    app.get('/profile/:UserId', function(req, res) {
        db.Profile.update(req.body.profPic, { 
            where: { UserId: req.session.uid } 
        }).then(function(updateProf) {
            res.json(updateProf);
        });
    });
};