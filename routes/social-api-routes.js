// Import models
var db = require('../models');

module.exports = function(app) {
    // GET: create feed of all posts
    app.get('/api/social', function(req, res) {
        db.Post.findAll({}).then(function(data) {
            // var feedData = {};
            var feedPhotos = [];
            var feedBody = [];
            var feedUser = [];
            // for (var i = 0; i < data.length; i++) {
            //     var postData = [];
            //     postData.push(data[i].dataValues.photo);
            //     postData.push(data[i].dataValues.body);
            //     postData.push(data[i].dataValues.UserId);
            //     feedData.push(postData)
            // }
            for (var i = 0; i < data.length; i++) {
                feedPhotos.push(data[i].dataValues.photo);
                feedBody.push(data[i].dataValues.body);
                feedUser.push(data[i].dataValues.UserId);
            }
            res.render('social', { social: data, photos: feedPhotos, captions: feedBody, users: feedUser });
            // console.log(feedData);
            // res.render('social', { social: data, feedData: feedData });
        });
    });

    // POST: upload a new social post
    app.post('/api/social', function(req, res) {
        db.Post.create(req.body).then(function(newPost) {
            res.json(newPost);
        }).catch(function(err) {
            res.json(err);
        });
    });
};