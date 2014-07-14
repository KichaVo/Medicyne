App.controller('SymptomCtrl', function ($scope, $location, Symptoms) {

  $scope.openConversation = function () {
    console.log($scope.data);

    $location.path('/conversation');
  };

  $scope.data = {
    filter: null,
    symptoms: Symptoms.getListOfSymptoms()
  };

  $scope.filterSymptoms = function () {
    var selectedSymptomIds = getSelectedSymptomIds();

    $scope.data.symptoms = Symptoms.getListOfSymptoms($scope.data.filter, selectedSymptomIds);
  }

  $scope.clearFilter = function () {
    $scope.data.filter = null;

    $scope.filterSymptoms();
  }

  function getSelectedSymptomIds() {
    return Symptoms.getSelectedSymptomIds($scope.data.symptoms);
  }

})
