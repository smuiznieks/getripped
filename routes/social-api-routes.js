// Import models
var db = require('../models');

//Create a blank array to hold all the feed posts


//Create a constructor for feed posts 
function postConstructor(photo, caption, userId) {
    this.photo = photo;
    this.caption = caption;
    this.userId = userId;
};

module.exports = function(app) {
    
    // GET create feed of all posts
    app.get('/api/social', function(req, res) {
        db.Post.findAll({}).then(function(data) {
            var photoFeed = [];
            //loop through data in SQL
            for (var i = 0; i < data.length; i++) {
                //shortcut syntax for returned data
                var iteration = data[i].dataValues;    
                //run constructor with relevant data passed as arguments
                var singlePost = new postConstructor(iteration.photo, iteration.body, iteration.UserId);   
                //push current iteration of constructed object into array
                photoFeed.unshift(singlePost);
            }
            //render the social page
            res.render('social', {"postData": photoFeed});
        });
    });

    // POST upload a new social post
    app.post('/api/social', function(req, res) {
        db.Post.create({
            photo: req.body.photo,
            body: req.body.caption,
            UserId: 1
        }).then(function(newPost) {
            res.json(newPost);
        }).catch(function(err) {
            res.json(err);
        });
    });
};