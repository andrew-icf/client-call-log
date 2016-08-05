angular
  .module('clientCall')
  .controller('OtherController', OtherController);

  function OtherController($scope, $state){
    $scope.done = function() {
      alert("Thank You");
    }
    $scope.blue = function(){
      $scope.active = true;
    }
    $scope.blue1 = function(){
      $scope.active1 = true;
    }
    $scope.blue2 = function(){
      $scope.active2 = true;
    }
    $scope.blue3 = function(){
      $scope.active3 = true;
    }
  };
