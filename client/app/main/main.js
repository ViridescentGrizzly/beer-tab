angular.module('beer-tab.main', [])
  .controller('MainCtrl', function ($scope, beerPmt) { // Come back here if shit doesn't work (look at $location)
    $scope.users = [{name: "david", beers: -1},
                    {name: "rosson", beers: 43},
                    {name: "mark", beers: -4},
                    {name: "bob", beers: 29},
                    {name: "Enos", beers: 34}];
    $scope.text = "beer paid!";
    $scope.beered = function (user) {
      beerPmt.recievePmt(user);
      //.then(function () {
        $scope.text = "sdf";
      //});

    };
  });
