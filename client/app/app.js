angular.module('app', ['auth','ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'app/auth/login.html',
        controller: 'AuthCtrl'
      }) 
      .when('/signup', {
        templateUrl: 'app/auth/signup.html',
        controller: 'AuthCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });

  }]);