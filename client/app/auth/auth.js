angular.module('beer-tab.auth', [])
  .controller('AuthCtrl', function ($scope, $location, $rootScope,
                                    USER_ROLES, AUTH_EVENTS, AuthService) {
    
    $scope.currentUser = null;
    $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = AuthService.isAuthorized;
   
    $scope.setCurrentUser = function (user) {
      $scope.currentUser = user;
    };

    // $scope.user = {};

    $scope.login = function (credentials) {
      AuthService.login(credentials)
        .then(function (user) {
          console.log("USER:", user);
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
          $scope.setCurrentUser(user);
          $location.path('/main');
        }, function () {
          $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
    };

    // $scope.login = function () {
    //   AuthService.login($scope.user)
    //     .then(function(token){
    //       $location.path('/main');
    //     })
    //     .catch(function (error) {
    //       console.error(error);
    //     });
    // };

    $scope.signup = function (credentials) {
      AuthService.signup(credentials)
        .then(function (res) {
          console.log('Routing to login page...');
          $location.path('/login');
        })
        .catch(function (error) {
          console.error(error);
        });
    };

  });