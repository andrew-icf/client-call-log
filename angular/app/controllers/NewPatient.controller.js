angular
  .module('clientCall')
  .controller('NewPatientController', NewPatientController);

  function NewPatientController($scope, $state){
    $scope.dropDown = {}
    $scope.dropDown.showDropDown = false;
    $scope.showIt = function(){
      $scope.dropDown.showDropDown = true;
    };
    $scope.dropDown.showDropDown1 = false;
    $scope.showIt1 = function(){
      $scope.dropDown.showDropDown1 = true;
    };
    $scope.dropDown.showDropDown2 = false;
    $scope.showIt2 = function(){
      $scope.dropDown.showDropDown2 = true;
    };
    $scope.dropDown.showDropDown3 = false;
    $scope.showIt3 = function(){
      $scope.dropDown.showDropDown3 = true;
    };

  };
