angular.module('beer-tab.auth', [])

.controller('AuthCtrl', function ($scope, $window, $location, AuthService) {
  
  $scope.user = {};

  $scope.login = function () {
      AuthService.login($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.beer-tab', token);
          $location.path('/main');
        })
        .catch(function (error) {
          console.error(error);
        });
    };

  $scope.signup = function () {
    AuthService.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.beer-tab', token);
        $location.path('/main');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signout = function () {
    AuthService.signout();
  };

});
