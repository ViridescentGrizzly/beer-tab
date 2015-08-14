var mainServices = angular.module('beer-tab.MainServices', []);

mainServices.factory('MainServices', function ($http) {
  var network = {};

  network.getUserNetwork = function (user) {
    console.log('passinguser:', user);
    return $http
      .post('/getUserNetwork', user)
      .then(function (network) {
        console.log('fact NETWORK:', network);
        // return resp.data.token;
      });
  };

  return network;
});
