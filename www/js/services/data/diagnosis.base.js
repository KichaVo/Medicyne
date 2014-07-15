App.factory('BaseDiagnosis', function (DiagnosisData, Underscore, $injector) {

  function BaseDiagnosis(diagnosis) {
    this.currentIndex = 0;
    this.diagnosis = diagnosis;
  }

  BaseDiagnosis.prototype.reset = function () {
    this.currentIndex = 0;
  }

  BaseDiagnosis.prototype.getNextQuestion = function (answer) {
    var question = this.diagnosis.getNextQuestion.call(this, answer);

    if (question) this.currentIndex++;

    return question;
  }

  return {
    buildDiagnosis: function (diagnosis) {
      return new BaseDiagnosis(diagnosis);
    }
  }

})
