// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');

var passport = require('passport');
var mongoose = require('mongoose');
var auth=require('./config/auth');
var session = require('express-session');
mongoose.connect('mongodb://mongouser:mongouser@ds119578.mlab.com:19578/anil_deneme');



// configuration ===========================================
	
// config files
var db = require('./config/db');




var port = process.env.PORT || 8080; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users


app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));


app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));


app.use(passport.initialize());
app.use(passport.session());


// routes ==================================================

var mailChimp = express.Router();
var twitter = express.Router();
var youtube = express.Router();

var facebook = express.Router();
var sendy= express.Router();

var index = express.Router();


var routers = {
    index: index,
    mailChimp: mailChimp,
    twitter: twitter,
    youtube: youtube,
    facebook: facebook,
    sendy: sendy,
};


var routes = require('./routes/routes')(app, routers);


// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app