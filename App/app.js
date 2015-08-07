angular.module('app', ['auth','ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: './auth/login.html',
        controller: 'AuthCtrl'
      }) 
      .when('/signup', {
        templateUrl: './auth/signup.html',
        controller: 'AuthCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });

  }]);