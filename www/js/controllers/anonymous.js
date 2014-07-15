App.controller('AnonymousCtrl', function ($scope, $location) {

  $scope.openSymptom = function () {
    $location.path('/symptom');
  };

})
