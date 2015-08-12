angular.module('beer-tab.services', [])

//   .factory('Auth', function ($http) {

//     var login = function (user) {
//       return $http({
//         method: 'POST',
//         url: '/login',
//         data: user
//       })
//     };

//     var signup = function (user) {
//       return $http({
//         method: 'POST',
//         url: '/signup',
//         data: user
//       });
//     };

//   // var isAuth = function () {
//   //   return !!$window.localStorage.getItem('com.shortly');
//   // };

//   // var signout = function () {
//   //   // $window.localStorage.removeItem('com.shortly');
//   //   $location.path('/signin');
//   // };

//   return {
//     login: login,
//     signup: signup
//     // isAuth: isAuth,
//     // signout: signout
//   };
// });

  .factory('AuthService', function ($http, Session) {
    var authService = {};
   
    authService.login = function (credentials) {
      return $http
        .post('/login', credentials)
        .then(function (res) {
          Session.create(res.data, res.config.data.username, 'user');
          // return res.data.user;
          return res.data.user;
        });
    };
   
    authService.signup = function(credentials) {
      return $http.post('/signup', credentials);
    };

    authService.isAuthenticated = function () {
      return !!Session.userId;
    };
   
    authService.isAuthorized = function (authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return (authService.isAuthenticated() &&
        authorizedRoles.indexOf(Session.userRole) !== -1);
    };
   
    return authService;
  })


  .service('Session', function () {
    this.create = function (sessionId, userId, userRole) {
      this.id = sessionId;
      this.userId = userId;
      this.userRole = userRole;
    };
    this.destroy = function () {
      this.id = null;
      this.userId = null;
      this.userRole = null;
    };
  });
