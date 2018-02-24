// Import models
var db = require('../models');

module.exports = function(app) {
    // GET all user information
    app.get('/api/user', function(req, res) {
        db.User.findAll({}).then(function(data) {
            res.json(data);
        });
    });

    // Render new user page
    app.get("/newuser", function (req, res) {
        res.render('newuser');
    });

    // Render login page
    app.get("/login", function (req, res) {
        res.render('login');
    });

    // Create new user
    app.post('/api/user', function(req, res) {
        db.User.findOrCreate( { where: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }}).spread((user, created) => {
            debugger;
            console.log(created, user.dataValues)
            req.session.uid = user.dataValues.id;
            req.session.save(() => {
                if(created){
                    res.json(user);
                }
            })    
        })
    });

    // Existing user login
    app.post('/api/user', function(req, res) {
        db.User.findOrCreate( { where: {
            email: req.body.validUser,
            password: req.body.validPassword         
        }}).spread((user, created) => {
            console.log(created, user.dataValues)
            req.session.uid = user.dataValues.id;
            req.session.save(() => {
                if(created){
                    res.json(user);
                }
            });
        })
    })
};