angular.module('beer-tab.auth', [])
  .controller('AuthCtrl', function ($scope, $location, Auth) { // Come back here if shit doesn't work (look at $location)
    $scope.user = {};

    $scope.login = function () {
      Auth.login($scope.user)
        .then(function(token){
          $location.path('/main');
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    $scope.signup = function () {
      Auth.signup($scope.user)
        .then(function () {
          $location.path('/login');
        })
        .catch(function (error) {
          console.error(error);
        });
    };

  });