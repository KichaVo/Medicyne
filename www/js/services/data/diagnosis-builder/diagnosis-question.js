App.factory('DiagnosisQuestion', function (DiagnosisAnswerChecker, Underscore) {

  function DiagnosisQuestion(question) {
    this.type = question.type || '';
    this.text = question.text;

    this.answer = question.answer || {};

    // default gender question
    if (this.isGenderQuestion()) {
      this.text = this.text || 'What is your gender?';
      return;
    }

    // default age question
    if (this.isAgeQuestion()) {
      this.text = this.text || 'How old are you?';
      return;
    }

    if (this.isPregnantQuestion()) {
      this.text = this.text || 'Are you pregnant?';
      return;
    }
  }

  DiagnosisQuestion.prototype.isYesNoQuestion = function () {
    return this.type.toUpperCase() === 'YES_NO' || this.isPregnantQuestion();
  }

  DiagnosisQuestion.prototype.isNumberQuestion = function () {
    return this.type.toUpperCase() === 'NUMBER';
  }

  DiagnosisQuestion.prototype.isTextQuestion = function () {
    return this.type.toUpperCase() === 'TEXT';
  }

  DiagnosisQuestion.prototype.isAgeQuestion = function () {
    return this.type.toUpperCase() === 'AGE';
  }

  DiagnosisQuestion.prototype.isGenderQuestion = function () {
    return this.type.toUpperCase() === 'GENDER';
  }

  DiagnosisQuestion.prototype.isPregnantQuestion = function () {
    return this.type.toUpperCase() === 'PREGNANT';
  }

  return {
    createQuestion: function (question) {
      return new DiagnosisQuestion(question);
    }
  }

});
