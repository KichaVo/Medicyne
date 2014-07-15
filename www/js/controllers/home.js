App.controller('HomeCtrl', function ($scope, $location) {

  $scope.openHistory = function () {
    $location.path('/history');
  };

  $scope.openSymptom = function () {
    $location.path('/symptom');
  };

})
