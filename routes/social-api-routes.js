// Import models
var db = require('../models');

//Create a blank array to hold all the feed posts


//Create a constructor for feed posts 
function postConstructor(photo, caption, userId, username) {
    this.photo = photo;
    this.caption = caption;
    this.userId = userId;
    this.username = username;
};

module.exports = function(app) {
    
    // GET create feed of all posts
    app.get('/social', function(req, res) {
        db.Post.findAll({
        	include: [db.User]
        }).then(function(data) {
            var photoFeed = [];
            //loop through data in SQL
            for (var i = 0; i < data.length; i++) {
                //shortcut syntax for returned data
                var iteration = data[i].dataValues;
                var joined = data[i].dataValues.User.dataValues;    
                //run constructor with relevant data passed as arguments
                var singlePost = new postConstructor(iteration.photo, iteration.body, iteration.UserId, joined.username);   
                //push current iteration of constructed object into array
                photoFeed.unshift(singlePost);
            }
            //render the social page
            res.render('social', {"postData": photoFeed});
        });
    });

    // POST upload a new social post
    app.post('/social', function(req, res) {
        console.log('UID: ' + req.session.uid);
        db.Post.create({
            photo: req.body.photo,
            body: req.body.caption,
            UserId: req.session.uid
        }).then(function(newPost) {
            res.json(newPost);
        }).catch(function(err) {
            res.json(err);
        });
    });
};