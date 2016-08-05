angular
  .module('clientCall')
  .controller('AppointmentSchedController', AppointmentSchedController);

  function AppointmentSchedController($scope, $state){
    $scope.yesNo = {}
    $scope.yesNo.showYes = false;
    $scope.yes = function(){
      $scope.yesNo.showYes = true;
    }
    $scope.yesNo.showNo = false;
    $scope.no = function(){
      $scope.yesNo.showNo = true;
    }
    $scope.done = function() {
      alert("Thank You");
    }

  };
