// server.js -- initialize node.js server
// ----------------------------------------------
var app = require('./config/server-config.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/beer-tab-db');

var schema = new mongoose.Schema ({
                                    username: String, 
                                    password: String,
                                    network: mongoose.Schema.Types.Mixed
                                  });

var User = mongoose.model('User', schema);

var user1 = new User({
                      username: 'argle', 
                      password: 'bargle', 
                      network: {
                                'nathino': -3,
                                'l337rofler': -2,
                                'steven': 4
                              }
                    });

user1.save(function(err, userObj){
  if(err){
    console.log(err);
  } else {
    console.log('saved successfully: ', userObj);
  }
});


var port = 3000;

app.listen(port);
console.log('Beer-tab server listening on port ' + port);

// module.exports = db;