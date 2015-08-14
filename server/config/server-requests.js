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
            res.status(418).end();
          } else {
            var token = jwt.encode(user, 'argleDavidBargleRosson');
            res.json({token: token});
            console.log('Success: Account added to database.');
            res.status(201).end();
          }
        });
      } else {
        console.log('Error: Account already exists');
        res.status(418).end();
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
        res.status(418).end();
      } else {
        var savedPassword = user.password;
        user.comparePassword(password, savedPassword, function(err, match) {
          if (match) {
            var token = jwt.encode(user, 'argleDavidBargleRosson');
            res.json({token: token});
            console.log('Success: Logged in');
            res.status(201).end();

          } else {
            console.log('Error: Incorrect password');
            res.status(418).end();
          }
        });
      }
  });
};


exports.toTabs = function(req, res){
  console.log('body', req.body);
  var username = req.body.username;

  User.findOne({ username: username })
    .exec(function(err, user) {
      if(!user) {
        console.log('attempted to route to tabs, but person not found!');
        res.status(500).end();
      } else {
        // if user exists, check the session's username
        // var token = jwt.encode(user, 'argleDavidBargleRosson');
        // var decoded = jwt.decode(token, 'argleDavidBargleRosson');
        res.status(201).send(user).end();
      }
    });
};

exports.toPaid = function(req, res){
  console.log('body', req.body);
  var username = req.body.username;

  User.findOne({ username: username })
    .exec(function(err, user){
      if(!user){
        console.log('attempted to route to paid, but person not found!');
        res.status(500).end();  
      } else {
        // if user exists, check the session's username
        // var token = jwt.encode(user, 'argleDavidBargleRosson');
        // var decoded = jwt.decode(token, 'argleDavidBargleRosson');
        res.status(201).send(user).end();
      }
    });
};


