var bodyParser = require('body-parser');
var request = require('request');
var jwt = require('jwt-simple');

var User = require('./db-config.js');

var globalToken; 

var tokenize = function(user, callback){
  var token = jwt.encode(user, 'argleDavidBargleRosson');
  callback(token);
};



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

            // globally assigns token, so we can decode the token later
            tokenize(user, function(t){
              var jsonToken = {token: t};
              res.json(jsonToken);
              globalToken = jsonToken;
            });
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
            // globally assigns token, so we can decode the token later
            tokenize(user, function(t){
              var jsonToken = {token: t};
              res.json(jsonToken);
              globalToken = jsonToken;
            });

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


exports.routeToTabs = function(req, res){
  var username = req.body.username;

  User.findOne({ username: username })
    .exec(function(err, user) {
      if(!user) {
        console.log('attempted to route to tabs, but person not found!');
        res.status(500).end();
        // res.redirect()
      } else {
        // if user exists
        // somehow check the session's username
        //

        // explicitly tokenizing the username, so that async issues are ignored 
        tokenize(username, function(v){
          decoded = jwt.decode(v, 'argleDavidBargleRosson');
          console.log('User found, here is the decoded token: ', decoded);
          res.status(201).send(decoded).end();

        });
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


