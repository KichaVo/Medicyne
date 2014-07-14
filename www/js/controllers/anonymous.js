App.controller('AnonymousCtrl', function ($scope, $ionicModal, $location) {

  $scope.openSymptom = function () {
    $location.path('/symptom');
  };

})
