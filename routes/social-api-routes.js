// Import models
var db = require('./models');

module.exports = function(app) {
    // GET all social posts
    app.get('/', function(req, res) {
        db.Post.findAll({}).then(function(data) {
            var social = {
                post: data 
            };
            console.log(social);
        });
    });

    // POST a new social post
    app.post('/api/social', function(req, res) {
        db.Post.create(req.body).then(function(newPost) {
            res.json(newPost);
        }).catch(function(err) {
            res.json(err);
        });
    });
};