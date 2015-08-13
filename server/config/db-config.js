// db-config.js -- set up database connection and schema
// ----------------------------------------------
var BluebirdPromise = require('bluebird');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

mongoose.connect('mongodb://localhost:27017/beer-tab-db');

// Define user network schema
var networkSchema = mongoose.Schema ({
  username: String,
  beersOwed: Number
});

// Define user schema
var schema = mongoose.Schema ({
  username: { type: String, index: { unique: true } },
  password: String,
  network: [networkSchema]
});

// Hash pashword before saving to database
schema.pre('save', function(next){
  var cipher = BluebirdPromise.promisify(bcrypt.hash);

  return cipher(this.password, null, null).bind(this)
    .then(function(hash) {
      this.password = hash;
      next();  
    });
});

var User = mongoose.model('User', schema);

User.prototype.comparePassword = function(attemptedPassword, savedPassword, callback) {
  bcrypt.compare(attemptedPassword, savedPassword, function(err, isMatch) {
    if (err){
      callback(err);
    } else {
      callback(null, isMatch);
    }
  });
};

module.exports = User;
