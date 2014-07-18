App.factory('AllergyDiagnosis', function (DiagnosisBuilder, AllergyRoadmap, AllergyQuestion, AllergyMessage) {

  return DiagnosisBuilder.buildDiagnosis({
    questions: AllergyQuestion,
    messages: AllergyMessage,
    roadmap: AllergyRoadmap
  });

})
