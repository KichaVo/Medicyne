App.controller('HomeCtrl', function ($scope, $ionicModal, $location) {

  $scope.openHistory = function () {
    $location.path('/history');
  };

  $scope.openSymptom = function () {
    $location.path('/symptom');
  };

})
