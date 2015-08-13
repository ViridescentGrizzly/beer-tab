var bodyParser = require('body-parser');
var request = require('request');
var jwt = require('jwt-simple');

var User = require('./db-config.js');

exports.signupUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ username: username })
    .exec(function(err, user) {
      if (!user) {
        var newUser = new User({
          username: username,
          password: password
        });

        newUser.save(function(err, newUser) {
          if (err) {
            res.send(500, err);
          } else {
            var token = jwt.encode(user, 'argleDavidBargleRosson');
            res.json({token: token});
            console.log('Success: Account added to database.');
          }
        });
      } else {
        console.log('Error: Account already exists');
      }
    });
};

exports.loginUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ username: username })
    .exec(function(err, user) {
      if (!user) {
        console.log('Error: User not found');
      } else {
        var savedPassword = user.password;
        user.comparePassword(password, savedPassword, function(err, match) {
          if (match) {
            var token = jwt.encode(user, 'argleDavidBargleRosson');
            res.json({token: token});
            console.log('Success: Logged in');
          } else {
            console.log('Error: Incorrect password');
          }
        });
      }
  });
};


exports.routeToTabs = function(req, res){
  var username = req.body.username;

  User.findOne({ username: username })
    .exec(function(err, user) {
      if(!user) {
        console.log('attempted to route to tabs, but person not found!');
        // res.redirect()
      } else {
        // if user exists
        // somehow check the session's username
        // 
      }

    });
};

exports.routeToPaid = function(req, res){
  var username = req.body.username;

  User.findOne({ username: username })
    .exec(function(err, user){
      if(!user){
        console.log('attempted to route to paid, but person not found!');
        // res.redirect()
      } else {
        // if user exists
        // somehow check the session's username
        // 
      }

    });
};


