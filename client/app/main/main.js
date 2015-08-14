var main = angular.module('beer-tab.main', ['beer-tab.services', 'angular-jwt', 'ngTable']);


main.controller('MainCtrl', function ($scope, $window, beerPmt, jwtHelper, AuthService) {

  // Retrieve token from localStorage
  $scope.jwt = $window.localStorage.getItem('com.beer-tab');
  // Decode token (this uses angular-jwt. notice jwtHelper)
  $scope.decodedJwt = $scope.jwt && jwtHelper.decodeToken($scope.jwt);
  // Object used to contain user's beer network
  $scope.network = $scope.decodedJwt.network;
  // Pull username from token to display on main page
  $scope.user = $scope.decodedJwt.username;

  // Rename this function to something that better describes what it does
  $scope.beered = function (user) {
    if(AuthService.isAuth()) {
      beerPmt.recievePmt(user);
    }
  };

  $scope.sendBeer = function (user) {
    if(AuthService.isAuth()) {
      beerPmt.newIOU($scope.toUser);
    }
  };
});
