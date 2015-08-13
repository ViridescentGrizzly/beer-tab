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
  network: mongoose.Schema.Types.Mixed
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

var user1 = new User({
  username: 'iemanatemire',
  password: 'argleBargle1',
  network: {'stvnwu': -1, 'Vandres': 2, 'mKurrel': 0, 'dRosson': 3}
});

var user2 = new User({
  username: 'stvnwu',
  password: 'argleBargle2',
  network: {'iemanatemire': 1, 'Vandres': 0, 'mKurrel': 2, 'dRosson': -3}
});

var user3 = new User({
  username: 'Vandres',
  password: 'argleBargle3',
  network: {'stvnwu': 0, 'iemanatemire': -2, 'mKurrel': 1, 'dRosson': 0}
});

var user4 = new User({
  username: 'mKurrel',
  password: 'argleBargle4',
  network: {'stvnwu': -2, 'Vandres': -1, 'iemanatemire': 0, 'dRosson': 3}
});

var user5 = new User({
  username: 'dRosson',
  password: 'argleBargle5',
  network: {'stvnwu': 3, 'Vandres': 0, 'mKurrel': -3, 'iemanatemire': -3, 'allenJPrice': -1}
});

var user6 = new User({
  username: 'allenJPrice',
  password: 'argleBargle6',
  network: {'dRosson': 1}
});

user1.save( function(err, newUser) { 
  if (err) {console.log('user already in DB');} 
  else {console.log('successfully added');}
});
user2.save( function(err, newUser) { 
  if (err) {console.log('user already in DB');} 
  else {console.log('successfully added');}
});
user3.save( function(err, newUser) { 
  if (err) {console.log('user already in DB');} 
  else {console.log('successfully added');}
});
user4.save( function(err, newUser) { 
  if (err) {console.log('user already in DB');} 
  else {console.log('successfully added');}
});
user5.save( function(err, newUser) { 
  if (err) {console.log('user already in DB');} 
  else {console.log('successfully added');}
});
user6.save( function(err, newUser) { 
  if (err) {console.log('user already in DB');} 
  else {console.log('successfully added');}
});
