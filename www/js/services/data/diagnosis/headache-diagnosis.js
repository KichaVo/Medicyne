App.factory('HeadacheDiagnosis', function (BaseDiagnosis ) {

  return BaseDiagnosis.buildDiagnosis({
    getNextQuestion: getNextQuestion
  });

  function getNextQuestion(answer) {
    console.log(this.currentIndex, 'HeadacheDiagnosis');

    return true;
  }

})
