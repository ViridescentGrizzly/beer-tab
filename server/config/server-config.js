// Dependencies
var handler = require('./server-requests.js');
var bodyParser = require('body-parser');
var express = require('express');
var morgan = require('morgan');

// Initialize express process
var app = express();

// Bind middleware to app instance
app.use(morgan('dev'));
app.use(express.static('./client'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendfile('./client/index.html');
});

app.get('/login', function (req, res) {
  res.send();
});

app.get('/signup', function (req, res) {
  res.send();
});

app.post('/login', handler.loginUser);
app.post('/signup', handler.signupUser);
// app.post('/tabs', handler.routeToTabs);
// app.post('/paid', handler.routeToPaid);

// Export server app instance
module.exports = app;
