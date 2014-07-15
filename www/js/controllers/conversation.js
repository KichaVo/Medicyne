App.controller('ConversationCtrl', function ($scope, $location, $ionicScrollDelegate, $ionicPopup, ControllerStorage, Diagnosis) {

  //var diagnosis = ControllerStorage.getData('symptom.diagnosis');
  var diagnosis = Diagnosis.getDiagnosis(['allergy']);

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
      text: number,
      isAnswer: true
    });

    $ionicScrollDelegate.scrollBottom(true);

    getQuestion(number);
  }

  function getQuestion(answer) {
    var hasNext = diagnosis.next(answer);

    if (!hasNext) {
      $scope.data.question = null;

      // show medicine
      openRecommendation(diagnosis.medicine);
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
      angular.element('[answer-group="answer-yes-no"]').show();

      return;
    }

    if (question.isNumberQuestion()) {
      angular.element('[answer-group="answer-yes-no"]').hide();
      angular.element('[answer-group="answer-number"]').show();

      return;
    }
  }

  function openRecommendation(medicine) {
    console.log(medicine);
  }

})
