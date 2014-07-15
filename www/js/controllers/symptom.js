App.controller('SymptomCtrl', function ($scope, $location, $ionicPopup, Symptoms, Diagnosis, ControllerStorage) {

  $scope.data = {
    filter: null,
    symptoms: null
  };

  loadPage();

  $scope.filterSymptoms = function () {
    var selectedSymptomIds = getSelectedSymptomIds();
    $scope.data.symptoms = Symptoms.getListOfSymptoms($scope.data.filter, selectedSymptomIds);

    savePage();
  }

  $scope.clearFilter = function () {
    $scope.data.filter = null;
    $scope.filterSymptoms();
  }

  $scope.openConversation = function () {
    var selectedSymptomIds = getSelectedSymptomIds();

    if (!selectedSymptomIds || !selectedSymptomIds.length) return;

    var diagnosis = Diagnosis.getDiagnosis(selectedSymptomIds);

    if (diagnosis === null) {
      // show no symptom matched message
      $ionicPopup.alert({
        title: 'No symptoms available',
        template: ':( Sorry we can serve you at the moment'
      });

      return;
    }

    ControllerStorage.setData('symptom.diagnosis', diagnosis);

    $location.path('/conversation');
  };

  function getSelectedSymptomIds() {
    return Symptoms.getSelectedSymptomIds($scope.data.symptoms);
  }

  function savePage() {
    // dont save page
    return;

    ControllerStorage.setData('symptom.filter', $scope.data.filter)
    ControllerStorage.setData('symptom.selectedSymptomIds', getSelectedSymptomIds());
  }

  function loadPage() {
    var filter = ControllerStorage.getData('symptom.filter', '')
    var selectedSymptomIds = ControllerStorage.getData('symptom.selectedSymptomIds', []);

    //$scope.data.filter = filter;
    //$scope.data.symptoms = Symptoms.getListOfSymptoms(filter, selectedSymptomIds);

    $scope.data.filter = '';
    $scope.data.symptoms = Symptoms.getListOfSymptoms(filter, selectedSymptomIds);
  }

})
