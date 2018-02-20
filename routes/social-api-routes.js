// Import models
var db = require('../models');

module.exports = function (app) {
    // GET: create feed of all posts
    app.get('/api/social', function (req, res) {
        db.Post.findAll({}).then(function (data) {
            var feedPhotos = [];
            var feedBody = [];
            var feedUser = [];
            for (var i = 0; i < data.length; i++) {
                feedPhotos.push(data[i].dataValues.photo);
                feedBody.push(data[i].dataValues.body);
                feedUser.push(data[i].dataValues.UserId);
            }
            res.render('social', { photos: feedPhotos, captions: feedBody, users: feedUser });
        });
    });

    // POST: upload a new social post
    app.post('/api/social', function (req, res) {
        db.Post.create({
            photo: req.body.photo,
            body: req.body.caption,
            UserId: 1
        }).then(function (newPost) {
            res.json(newPost);
        }).catch(function (err) {
            res.json(err);
        });
    });
};