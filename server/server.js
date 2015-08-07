// server.js -- initialize node.js server
// ----------------------------------------------
var app = require('./config/server-config.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('Mongodb Connection Open');
});

var port = 3000;

app.listen(port);
console.log('Beer-tab server listening on port ' + port);

module.exports = db;