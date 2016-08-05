angular
  .module('clientCall')
  .controller('LoginController', LoginController);

  function LoginController($scope, $state){
    $scope.master = {};
    $scope.update = function(username) {
      $scope.master = angular.copy(user);
    };
    $scope.reset = function() {
      $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
  };
