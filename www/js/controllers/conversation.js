App.controller('ConversationCtrl', function ($scope, $location, ControllerStorage) {

  var diagnosis = ControllerStorage.getData('symptom.diagnosis');

  diagnosis.getNextQuestion();
  diagnosis.getNextQuestion();
  diagnosis.getNextQuestion();

})
