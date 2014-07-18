App.factory('HeadacheDiagnosis', function (DiagnosisBuilder, HeadacheQuestion, HeadacheMessage, HeadacheRoadmap) {

  return DiagnosisBuilder.buildDiagnosis({
    messages: HeadacheMessage,
    questions: HeadacheQuestion,
    roadmap: HeadacheRoadmap,
  });

})
