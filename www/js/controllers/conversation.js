App.controller('ConversationCtrl', function ($scope, $location, $ionicScrollDelegate, $ionicPopup, ControllerStorage, Diagnosis) {

  var diagnosis = ControllerStorage.getData('symptom.diagnosis');

  var userProfile = {};

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

    var answer = 'YES';

    var question = $scope.data.question;
    if (question.isPregnantQuestion()) {
      userProfile.pregnant = answer;
    }

    getQuestion(answer);
  }

  $scope.doNoAnswer = function () {
    $scope.data.conversation.push({
      text: 'No',
      isAnswer: true
    });

    $ionicScrollDelegate.scrollBottom(true);

    var answer = 'NO';

    var question = $scope.data.question;
    if (question.isPregnantQuestion()) {
      userProfile.pregnant = answer;
    }

    getQuestion(answer);
  }

  $scope.doMaleAnswer = function () {
    $scope.data.conversation.push({
      text: 'Male',
      isAnswer: true
    });

    $ionicScrollDelegate.scrollBottom(true);

    var gender = 'MALE';

    userProfile.gender = gender;

    getQuestion(gender);
  }

  $scope.doFemaleAnswer = function () {
    $scope.data.conversation.push({
      text: 'Female',
      isAnswer: true
    });

    $ionicScrollDelegate.scrollBottom(true);

    var gender = 'FEMALE';

    userProfile.gender = gender;

    getQuestion(gender);
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

    if (question.isAgeQuestion()) {
      userProfile.age = number;
    }

    getQuestion(number);
  }

  $scope.doTextAnswer = function () {
    var text = ($scope.data.answer.text || '').trim();
    var question = $scope.data.question;

    var allowedAnswers = question.answer || [];

    var isAllowed = false;
    for (var i = 0, len = allowedAnswers.length; i < len; i++) {
      if (allowedAnswers[i].trim().toUpperCase() === text.toUpperCase()) {
        isAllowed = true;
        break;
      }
    }

    // if the answer is not allowed
    if (!isAllowed) {
      $ionicPopup.alert({
        title: 'Invalid answer',
        template: 'Please type one of followings: <b>' + allowedAnswers.join(', ') + '</b>'
      });

      return;
    }

    $scope.data.answer.text = null;

    $scope.data.conversation.push({
      text: '' + text,
      isAnswer: true
    });

    $ionicScrollDelegate.scrollBottom(true);

    getQuestion(text);
  }

  function getQuestion(answer) {
    var hasNext = diagnosis.next(answer);

    if (diagnosis.hasMessages) {
      var messages = diagnosis.messages;

      for (var i = 0, len = messages.length; i < len; i++) {
        $scope.data.conversation.push({
          text: messages[i],
          isMessage: true
        });
      }
    }

    if (!hasNext) {
      $scope.data.question = null;

      if (diagnosis.hasMedicines) {
        // show medicine
        openRecommendation(diagnosis.medicines);
      } else {
        angular.element('[answer-group="answer-number"]').hide();
        angular.element('[answer-group="answer-text"]').hide();
        angular.element('[answer-group="answer-gender"]').hide();
        angular.element('[answer-group="answer-yes-no"]').hide();
        angular.element('[answer-group="no-solution"]').show();
      }

      return;
    }

    var question = diagnosis.question;

    // check for gender is already answered
    if (question.isGenderQuestion() && userProfile.gender !== undefined) {
      getQuestion(userProfile.gender);
      return;
    }

    // check for age is already answered
    if (question.isAgeQuestion() && userProfile.age !== undefined) {
      getQuestion(userProfile.age);
      return;
    }

    // check for pregnant is already answered
    if (question.isPregnantQuestion() && userProfile.pregnant !== undefined) {
      getQuestion(userProfile.pregnant);
      return;
    }

    $scope.data.question = question;

    $scope.data.conversation.push({
      text: question.text,
      isQuestion: true
    });

    if (question.isYesNoQuestion()) {
      angular.element('[answer-group="answer-number"]').hide();
      angular.element('[answer-group="answer-text"]').hide();
      angular.element('[answer-group="answer-gender"]').hide();
      angular.element('[answer-group="no-solution"]').hide();
      angular.element('[answer-group="answer-yes-no"]').show();

      return;
    }

    if (question.isGenderQuestion()) {
      angular.element('[answer-group="answer-yes-no"]').hide();
      angular.element('[answer-group="answer-number"]').hide();
      angular.element('[answer-group="answer-text"]').hide();
      angular.element('[answer-group="no-solution"]').hide();
      angular.element('[answer-group="answer-gender"]').show();

      return;
    }

    if (question.isNumberQuestion() || question.isAgeQuestion()) {
      angular.element('[answer-group="answer-yes-no"]').hide();
      angular.element('[answer-group="answer-gender"]').hide();
      angular.element('[answer-group="no-solution"]').hide();
      angular.element('[answer-group="answer-text"]').hide();
      angular.element('[answer-group="answer-number"]').show();

      return;
    }

    if (question.isTextQuestion()) {
      angular.element('[answer-group="answer-yes-no"]').hide();
      angular.element('[answer-group="answer-gender"]').hide();
      angular.element('[answer-group="no-solution"]').hide();
      angular.element('[answer-group="answer-number"]').hide();
      angular.element('[answer-group="answer-text"]').show();

      return;
    }
  }

  function openRecommendation(medicines) {
    ControllerStorage.setData('conversation.medicineIds', medicines);

    $location.path('/recommendation');
  }

})
