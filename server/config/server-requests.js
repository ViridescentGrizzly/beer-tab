var request = require('request');
var bodyParser = require('body-parser');
var utils = require('./server-utils')

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
            // util.createSession(req, res, newUser);
            console.log('Account added to database.');
          }
        });
      } else {
        console.log('Account already exists');
        res.redirect('/signup');
      }
    })
};

exports.loginUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ username: username })
    .exec(function(err, user) {
      if (!user) {
        res.redirect('/login');
      } else {
        var savedPassword = user.password;

        user.comparePassword(password, savedPassword, function(err, match) {
          if (match) {
            utils.createSession(req, res, user);
            console.log('logged in');
          } else {
            // SHOULD PROVIDE USER FEEDBACK
            // on invalid credentials
            res.redirect('/login');
          }
        });
      }
  });
};