// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var pug = require('pug');

// Models
var db = require("./models");

// Express app
var app = express();
var PORT = 8080;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Pug
app.set('view engine', 'pug')

// Routes
require('./routes/user-api-routes.js')(app);
require('./routes/social-api-routes.js')(app);

// Listen to server
db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});