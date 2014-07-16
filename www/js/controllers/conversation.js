App.controller('ConversationCtrl', function ($scope, $location, $ionicScrollDelegate, $ionicPopup, ControllerStorage, Diagnosis) {

  var diagnosis = ControllerStorage.getData('symptom.diagnosis');

  diagnosis.reset();

  $scope.data = {
    conversation: [],
    question: null,
    answer: {
      number: null
    }
  };

  getQuestion();

  $scope.doYesAnswer = function () {
    $scope.data.conversation.push({
      text: 'Yes',
      isAnswer: true
    });

    $ionicScrollDelegate.scrollBottom(true);

    getQuestion('YES');
  }

  $scope.doNoAnswer = function () {
    $scope.data.conversation.push({
      text: 'No',
      isAnswer: true
    });

    $ionicScrollDelegate.scrollBottom(true);

    getQuestion('NO');
  }

  $scope.doMaleAnswer = function () {
    $scope.data.conversation.push({
      text: 'Male',
      isAnswer: true
    });

    $ionicScrollDelegate.scrollBottom(true);

    getQuestion('MALE');
  }

  $scope.doFemaleAnswer = function () {
    $scope.data.conversation.push({
      text: 'Female',
      isAnswer: true
    });

    $ionicScrollDelegate.scrollBottom(true);

    getQuestion('FEMALE');
  }

  $scope.doNumberAnswer = function () {
    var number = $scope.data.answer.number;
    var question = $scope.data.question;

    number = (!number && number !== 0) ? +undefined : +number;

    // check valid number
    if (isNaN(number)) {
      $ionicPopup.alert({
        title: 'Invalid number',
        template: 'Please enter a number'
      });

      return;
    }

    // check minimum number
    if ('min' in question.answer && number < question.answer.min) {
      $ionicPopup.alert({
        title: 'Invalid number',
        template: 'The minimum allowed number is <b>' + question.answer.min + '</b>'
      });

      return;
    }

    // check maximum number
    if ('max' in question.answer && number > question.answer.max) {
      $ionicPopup.alert({
        title: 'Invalid number',
        template: 'The maximum allowed number is <b>' + question.answer.max + '</b>'
      });

      return;
    }

    $scope.data.answer.number = null;

    $scope.data.conversation.push({
      text: '' + number,
      isAnswer: true
    });

    $ionicScrollDelegate.scrollBottom(true);

    getQuestion(number);
  }

  function getQuestion(answer) {
    var hasNext = diagnosis.next(answer);

    if (!hasNext) {
      $scope.data.question = null;

      if (diagnosis.hasSolution) {
        // show medicine
        openRecommendation(diagnosis.medicines);
      } else {
        $scope.data.conversation.push({
          text: diagnosis.message,
          isMessage: true
        });

        angular.element('[answer-group="answer-number"]').hide();
        angular.element('[answer-group="answer-gender"]').hide();
        angular.element('[answer-group="answer-yes-no"]').hide();
        angular.element('[answer-group="no-solution"]').show();
      }

      return;
    }

    var question = diagnosis.question;

    $scope.data.question = question;

    $scope.data.conversation.push({
      text: question.text,
      isQuestion: true
    });

    if (question.isYesNoQuestion()) {
      angular.element('[answer-group="answer-number"]').hide();
      angular.element('[answer-group="answer-gender"]').hide();
      angular.element('[answer-group="no-solution"]').hide();
      angular.element('[answer-group="answer-yes-no"]').show();

      return;
    }

    if (question.isGenderQuestion()) {
      angular.element('[answer-group="answer-yes-no"]').hide();
      angular.element('[answer-group="answer-number"]').hide();
      angular.element('[answer-group="no-solution"]').hide();
      angular.element('[answer-group="answer-gender"]').show();

      return;
    }

    if (question.isNumberQuestion() || question.isAgeQuestion()) {
      angular.element('[answer-group="answer-yes-no"]').hide();
      angular.element('[answer-group="answer-gender"]').hide();
      angular.element('[answer-group="no-solution"]').hide();
      angular.element('[answer-group="answer-number"]').show();

      return;
    }
  }

  function openRecommendation(medicines) {
    ControllerStorage.setData('conversation.medicineIds', medicines);

    $location.path('/recommendation');
  }

})
