angular.module('beer-tab.main', [])

  .controller('MainCtrl', function ($scope) { // Come back here if shit doesn't work (look at $location)
    $scope.users = [{name: "Moroni", age: 50},
                    {name: "Tiancum", age: 43},
                    {name: "Jacob", age: 27},
                    {name: "Nephi", age: 29},
                    {name: "Enos", age: 34}];
  });

