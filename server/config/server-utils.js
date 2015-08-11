// ------------------------------------------
//    Authentication functions
// ------------------------------------------
exports.isLoggedIn = function(req, res) {
  // Check if user is logged in
};

exports.checkUser = function (req, res, next) {
  // Middleware to check if user is logged in before proceeding
  if (!exports.isLoggedIn) {
    res.redirect('/login');
  } else {
    next();
  }

};

exports.logout = function (req, res) {
  // Destroy user session
};

exports.createSession = function(req, res, newUser){
  return req.session.regenerate(function(){
    req.session.user = newUser;
    res.redirect('/');
  });
};