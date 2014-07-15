App.controller('RecommendationCtrl', function ($scope, $location, ControllerStorage, Medicines) {

  var medicineIds = ControllerStorage.getData('conversation.medicineIds');

  $scope.data = {
    medicines: Medicines.getMedicines(medicineIds)
  };

})
