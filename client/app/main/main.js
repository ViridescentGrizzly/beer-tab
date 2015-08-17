var main = angular.module('beer-tab.main', ['beer-tab.services', 'angular-jwt', 'ngTable']);


main.controller('MainCtrl', function ($scope, $window, beerPmt, jwtHelper, AuthService, util) {
  // Retrieve token from localStorage
  $scope.jwt = $window.localStorage.getItem('com.beer-tab');
  // Decode token (this uses angular-jwt. notice jwtHelper)
  $scope.decodedJwt = $scope.jwt && jwtHelper.decodeToken($scope.jwt);
  // Object used to contain user's beer network
  $scope.network = util.toArr($scope.decodedJwt.network);
  // $scope.network =  argle || $scope.decodedJwt.network;
  // Pull username from token to display on main page
  $scope.user = $scope.decodedJwt.username;



  $scope.sendBeer = function (user) {
    console.log('sendBeer called', user);
    if(AuthService.isAuth()) {
      beerPmt.newIOU(user)
      .then(function(derp){
        console.log(derp); 
        $scope.network = util.toArr(derp.network);
        
      });
    }
  };


});
