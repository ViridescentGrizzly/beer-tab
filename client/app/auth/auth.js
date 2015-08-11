angular.module('beer-tab.auth', [])
  .controller('AuthCtrl', function ($scope, Auth) { // Come back here if shit doesn't work (look at $location)
    $scope.user = {};

    $scope.signup = function () {
      console.log('Auth Controller');

      Auth.signup($scope.user)
        // .then(function (token) {
        //   $window.localStorage.setItem('com.shortly', token);
        //   $location.path('/links');
        // })
        .catch(function (error) {
          console.error(error);
        });
    };


  });