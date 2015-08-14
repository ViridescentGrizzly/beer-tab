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

//in this function we update the network attr. of both, sender and receiver
exports.toTabs = function(req, res){
  //Here we distribute the data we received from the request
  var reciever = req.body.user;
  //since we got a token we need to decode it first
  var decoded = jwt.decode(req.body.token, 'argleDavidBargleRosson');
  var sender = decoded.username; 
  //This query finds the sender in the db
  User.findOne({ username: sender })
    .exec(function(err, user) {
      if(!user) {
        console.log('attempted to route to tabs, but person not found!');
        res.status(500).end();
      } else {
              // var token = jwt.encode(user, 'argleDavidBargleRosson');
              // var decoded = jwt.decode(token, 'argleDavidBargleRosson');
              
              // if user exists, check the session's username
          if(user.network.hasOwnProperty(reciever)){
              //if the receiver is on the network of the sender, the number is incremented 
            user.network[reciever]++;
          } else {
            //otherwise, we create the relationship
            user.network[reciever] = 1;
          }
          //this does the exact same thing, but from the receiver's perspective  
          User.findOne({ username: reciever })
            .exec(function(err, user) {
              if(!user) {
                console.log('attempted to route to tabs, but person not found!');
                res.status(500).end();
              } else {
                  //instead of incrementing, the number decreases
                  if(user.network.hasOwnProperty(sender)){
                    user.network[sender]--;
                  } else {
                    //the default in this case is negative
                    user.network[sender] = -1;
                  }

                  res.status(201).send(user).end();
                }
            });  
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


