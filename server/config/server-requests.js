var request = require('request');
var bodyParser = require('body-parser');

exports.signupUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  console.log('user:', username, '| password:', password);

  // User.findOne({ username: username })
  //   .exec(function(err, user) {
  //     if (!user) {
  //       var newUser = new User({
  //         username: username,
  //         password: password
  //       });

  //       newUser.save(function(err, newUser) {
  //         if (err) {
  //           res.send(500, err);
  //         } else {
  //           util.createSession(req, res, newUser);
  //         }
  //       });
  //     } else {
  //       console.log('Account already exists');
  //       res.redirect('/signup');
  //     }
  //   })
};