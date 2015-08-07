// Dependencies
var express = require('express');
var morgan = require('morgan');

// Initialize express process
var app = express();

// Bind middleware to app instance
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

// Export server app instance
module.exports = app;