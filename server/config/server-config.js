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

app.post('/login', handler.loginUser);
app.post('/signup', handler.signupUser);
app.post('/tabs', handler.toTabs);
app.post('/paid', handler.toPaid);

// Export server app instance
module.exports = app;
