App.factory('AllergyDiagnosis', function (BaseDiagnosis) {

  return BaseDiagnosis.buildDiagnosis({
    getNextQuestion: getNextQuestion
  });

  function getNextQuestion(answer) {
    console.log(this.currentIndex, 'AllergyDiagnosis');

    return true;
  }

})
