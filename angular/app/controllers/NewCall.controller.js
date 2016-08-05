angular
  .module('clientCall')
  .controller('NewCallController', NewCallController);

  function NewCallController($scope, $state){
    $scope.date = new Date();
  };
