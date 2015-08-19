var main = angular.module('beer-tab.main', ['beer-tab.services', 'angular-jwt', 'ngTable']);


main.controller('MainCtrl', function ($scope, $window, beerPmt, jwtHelper, AuthService, getTable, util) {
  // Retrieve token from localStorage
  $scope.jwt = $window.localStorage.getItem('com.beer-tab');
  // Decode token (this uses angular-jwt. notice jwtHelper)
  $scope.decodedJwt = $scope.jwt && jwtHelper.decodeToken($scope.jwt);
  // Object used to contain user's beer network
  getTable.getTable($scope.user)
    .then(function (derp) {
      $scope.network = util.toArr(derp);
    });

  // $scope.network =  argle || $scope.decodedJwt.network;
  // Pull username from token to display on main page
  $scope.user = $scope.decodedJwt.username;
  console.log('$scope.user', $scope.user);


  //this is used to show the add friend button, and hide the
  // new friend form
  $scope.clicked = false;

  //This function sennds a request to the server, it returns 
  //the updated information
  $scope.sendBeer = function (user) {

    if(user){
      console.log('sendBeer called', user);
      if(AuthService.isAuth()) {
        beerPmt.newIOU(user)
        .then(function(derp){
          console.log(derp); 
          $scope.network = util.toArr(derp.network);
          
        });
      }
    }
  };


});
