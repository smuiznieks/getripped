// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var pug = require('pug');
var path = require('path');
var session = require('express-session');

// Models
var db = require("./models");

// Express app
var app = express();
var PORT = process.env.PORT || 8080 ;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 10e10
    }
}));

// Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Default Path
app.get("/", function (req, res) {
    res.render('index');
});

// Routes
require('./routes/user-api-routes.js')(app);
require('./routes/social-api-routes.js')(app);
require('./routes/api-routes.js')(app);
require('./routes/profile-api-routes.js')(app);

// Listen to server
db.sequelize.sync({}).then(function () {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});

// Error Handling
app.use(function (err, req, res, next) {
    if (!err) {
        next();
    }
    console.log(err);
    res
        .status(500)
        .json({
            error: 500,
            message: err.message
        });
});