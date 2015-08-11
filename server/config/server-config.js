// Dependencies
var handler = require('./server-requests.js');
var util = require('./server-utils.js');
var bodyParser = require('body-parser');
var express = require('express');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

// Initialize express process
var app = express();

// Bind middleware to app instance
app.use(morgan('dev'));
app.use(express.static('./client'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
                  secret: 'keyboard cat',
                  resave: false,
                  saveUninitialized: true,
                  cookie: {secure: true}
                }));
app.use(session({
  store: new MongoStore({
    url: 'mongodb://localhost:27017/beer-tab-db'
  }), 
  secret: 'arglebargledavidrosson'
}));


app.get('/', util.checkUser, function (req, res) {
  res.sendfile('./client/index.html');
});

app.get('/login', function (req, res) {
  res.send(200);
});

app.get('/signup', function (req, res) {
  res.send(200);
});

app.post('/login', handler.loginUser);
app.post('/signup', handler.signupUser);

// Export server app instance
module.exports = app;