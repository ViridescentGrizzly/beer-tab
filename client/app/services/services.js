angular.module('beer-tab.services', [])

.factory('AuthService', function ($http, $location, $window) {
  var authService = {};
 
  authService.login = function (credentials) {
    return $http
      .post('/login', credentials)
      .then(function (resp) {
        return resp.data.token;
      });
  };
 
  authService.signup = function(credentials) {
    console.log('cred:', credentials);
    return $http
      .post('/signup', credentials)
      .then(function (resp) {
        return resp.data.token;
      });
  };

  authService.isAuth = function () {
    return !!$window.localStorage.getItem('com.beer-tab');
  };

  authService.signout = function () {
    $window.localStorage.removeItem('com.beer-tab');
    $location.path('/login');
  };

  return authService;
})

.factory('getTable', function ($window, $http) {
  
  var getTable = function (user) {
    return $http({
      method: 'POST',
      url: '/table',
      data: {user: user}
    })
    .then(function (resp) {
      console.log(resp.data);
      return resp.data;
    });
  };


  return {
    getTable: getTable,
  };
})

.factory('beerPmt', function ($window, $http) {
  
  var newIOU = function (user) {
    return $http({
      method: 'POST',
      url: '/tabs',
      data: {token: $window.localStorage.getItem('com.beer-tab'), user: user}
    })
    .then(function (resp) {
      console.log(resp.data);
        return resp.data;
    });
  };



  return {
    newIOU: newIOU,
  };
})
.factory('util', function(){
  var helper = {};
  
  helper.toArr = function (obj){
    var temp = [];
    for(var key in obj){
      temp.push({
        username: key,
        tab: obj[key]
      });
    }
    return temp;
  };

  return helper;
});



