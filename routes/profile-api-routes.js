// Import models
var db = require('../models');

module.exports = function(app) {
    // GET display user information
    app.get('/api/profile', function(req, res) {
        db.Profile.findOne({
            where: {
                UserId: 1
            }
        }).then(function(data) {
            var profile = data.dataValues;
            res.render('profile', { profPic: profile.profPic, profName: profile.profName, profLocation: profile.profLocation });
        });
    });

    // UPDATE user profile
    app.get('/api/profile', function(req, res) {
        db.Profile.update(req.body.profPic, { 
            where: { UserId: 1 } 
        }).then(function(updateProf) {
            res.json(updateProf);
        });
    });
};