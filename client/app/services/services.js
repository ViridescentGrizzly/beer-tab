angular.module('beer-tab.services', [])

  .factory('Auth', function ($http) {

  // var signin = function (user) {
  //   return $http({
  //     method: 'POST',
  //     url: '/api/users/signin',
  //     data: user
  //   })
  //   .then(function (resp) {
  //     return resp.data.token;
  //   });
  // };

    var signup = function (user) {
      console.log('Auth Factory:', user);
      return $http({
        method: 'POST',
        url: '/signup',
        data: user
      });
      // .then(function (resp) {
      //   return resp.data.token;
      // });
    };

  // var isAuth = function () {
  //   return !!$window.localStorage.getItem('com.shortly');
  // };

  // var signout = function () {
  //   // $window.localStorage.removeItem('com.shortly');
  //   $location.path('/signin');
  // };

  return {
    // signin: signin,
    signup: signup
    // isAuth: isAuth,
    // signout: signout
  };
});
