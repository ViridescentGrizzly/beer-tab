angular.module('beer-tab.services', [])

  .factory('Auth', function ($http) {

    var login = function (user) {
      return $http({
        method: 'POST',
        url: '/login',
        data: user
      })
    };

    var signup = function (user) {
      return $http({
        method: 'POST',
        url: '/signup',
        data: user
      });
    };

  // var isAuth = function () {
  //   return !!$window.localStorage.getItem('com.shortly');
  // };

  // var signout = function () {
  //   // $window.localStorage.removeItem('com.shortly');
  //   $location.path('/signin');
  // };

  return {
    login: login,
    signup: signup
    // isAuth: isAuth,
    // signout: signout
  };
});
