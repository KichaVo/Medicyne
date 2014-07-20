App.controller('ConversationCtrl', function ($scope, $sce, $timeout, $location, $ionicScrollDelegate, $ionicPopup, ControllerStorage, Diagnosis) {

  var diagnosis = ControllerStorage.getData('symptom.diagnosis');

  var userProfile;
  var diagnosisAnswers;
  var questionCount;

  resetData();
  getQuestion();

  $scope.rollback = function ($event) {
    var element = angular.element($event.target);
    if (!element.hasClass('question')) element = element.closest('.question');
    if (!element.size() || element.hasClass('message')) return;

    var questionIndex = element.data('question-index');

    if (questionIndex == questionCount) return;

    var confirmPopup = $ionicPopup.confirm({
      title: 'Warning',
      template: 'Are you sure to get back to this question?'
    });

    confirmPopup.then(function (accept) {
      if (accept) {
        rollback(questionIndex);
        $ionicScrollDelegate.scrollBottom(true);
      }
    });
  }

  $scope.reset = function () {
    resetData();
    getQuestion();

    $ionicScrollDelegate.scrollTop(true);
  }

  $scope.doYesAnswer = function () {
    var text = 'Yes';
    var answer = 'YES';

    $scope.data.conversation.push({
      text: text,
      isAnswer: true
    });

    $ionicScrollDelegate.scrollBottom(true);

    var question = $scope.data.question;
    if (question.isPregnantQuestion()) {
      userProfile.pregnant = answer;
    }

    getQuestion(answer, text);
  }

  $scope.doNoAnswer = function () {
    var text = 'No';
    var answer = 'NO';

    $scope.data.conversation.push({
      text: text,
      isAnswer: true
    });

    $ionicScrollDelegate.scrollBottom(true);

    var question = $scope.data.question;
    if (question.isPregnantQuestion()) {
      userProfile.pregnant = answer;
    }

    getQuestion(answer, text);
  }

  $scope.doMaleAnswer = function () {
    var text = 'Male';
    var answer = 'MALE';

    $scope.data.conversation.push({
      text: text,
      isAnswer: true
    });

    $ionicScrollDelegate.scrollBottom(true);

    userProfile.gender = answer;

    getQuestion(answer, text);
  }

  $scope.doFemaleAnswer = function () {
    var text = 'Female';
    var answer = 'FEMALE';

    $scope.data.conversation.push({
      text: text,
      isAnswer: true
    });

    $ionicScrollDelegate.scrollBottom(true);

    userProfile.gender = answer;

    getQuestion(answer, text);
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

  function getQuestion(answer, text) {
    questionCount += 1;
    diagnosisAnswers.push({
      answer: answer,
      text: text
    });

    var hasNext = diagnosis.next(answer);

    if (diagnosis.hasMessages) {
      var messages = diagnosis.messages;

      for (var i = 0, len = messages.length; i < len; i++) {
        $scope.data.conversation.push({
          text: $sce.trustAsHtml(messages[i]),
          isMessage: true
        });
      }

      bindEvents();
    }

    if (!hasNext) {
      $scope.data.question = null;

      if (diagnosis.hasMedicines) {
        // show medicine
        openRecommendation(diagnosis.medicines);
      } else {
        showAnswerGroup('no-solution');
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
      text: $sce.trustAsHtml(question.text),
      isQuestion: true,
      questionIndex: questionCount
    });

    bindEvents();

    if (question.isYesNoQuestion()) {
      showAnswerGroup('answer-yes-no');

      return;
    }

    if (question.isGenderQuestion()) {
      showAnswerGroup('answer-gender');

      return;
    }

    if (question.isNumberQuestion() || question.isAgeQuestion()) {
      showAnswerGroup('answer-number');

      return;
    }

    if (question.isTextQuestion()) {
      showAnswerGroup('answer-text');

      return;
    }
  }

  function showAnswerGroup(groupName) {
    angular.element('.page-conversation [answer-group]').hide();
    angular.element('.page-conversation [answer-group="' + groupName + '"]').show();
  }

  function openRecommendation(medicines) {
    ControllerStorage.setData('conversation.medicineIds', medicines);

    $location.path('/recommendation');
  }

  function resetData() {
    userProfile = {};

    diagnosisAnswers = [];
    questionCount = 0;

    $scope.data = {
      conversation: [],
      question: null,
      answer: {
        number: null
      }
    };

    diagnosis.reset();
  }

  function rollback(questionIndex) {
    var answers = diagnosisAnswers.slice(0, questionIndex);

    resetData();

    for (var i = 0, len = answers.length; i < len; i++) {
      var answer = answers[i];

      if (answer.answer !== undefined) {
        // add answer to conversation again
        $scope.data.conversation.push({
          text: '' + (answer.text || answer.answer),
          isAnswer: true
        });
      }

      getQuestion(answer.answer, answer.text);
    }
  }

  function bindEvents() {
    $timeout(function () {
      angular.element('.page-conversation disease')
        .off('click.info')
        .on('click.info', openDiseaseInfo);
    });
  }

  function openDiseaseInfo(event) {
    var element = angular.element(this);
    var diseaseId = element.attr('id');

    console.log('openDiseaseInfo:', diseaseId);

    event.preventDefault();
    event.stopPropagation();
  }

})
