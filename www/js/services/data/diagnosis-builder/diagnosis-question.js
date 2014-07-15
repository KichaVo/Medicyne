App.factory('DiagnosisQuestion', function (DiagnosisAnswerChecker, Underscore) {

  function DiagnosisQuestion(question) {
    this.type = question.type || '';
    this.text = question.text;

    this.answer = question.answer || {};
  }

  DiagnosisQuestion.prototype.isYesNoQuestion = function () {
    return this.type.toUpperCase() === 'YES/NO'
  }

  DiagnosisQuestion.prototype.isNumberQuestion = function () {
    return this.type.toUpperCase() === 'NUMBER'
  }

  return {
    createQuestion: function (question) {
      return new DiagnosisQuestion(question);
    }
  }

});
