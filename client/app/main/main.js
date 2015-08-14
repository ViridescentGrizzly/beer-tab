var main = angular.module('beer-tab.main', ['ngTable']);

main.controller('MainCtrl', function ($scope, beerPmt) { // Come back here if shit doesn't work (look at $location)
  // Object used to contain user's beer network
  $scope.users = [{name: 'david', beers: -1},
                  {name: 'rosson', beers: 43},
                  {name: 'mark', beers: -4},
                  {name: 'bob', beers: 29},
                  {name: 'Enos', beers: 34}];

  $scope.text = 'Pay Tab';
  
  // Rename this function to something that better describes what it does
  $scope.beered = function (user) {
    beerPmt.recievePmt(user);
    //.then(function () {
      $scope.text = 'sdf';
    //});

  };
});
