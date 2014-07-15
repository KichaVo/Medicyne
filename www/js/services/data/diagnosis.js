App.factory('Diagnosis', function (DiagnosisData, Underscore, $injector) {

  var Diagnosis = DiagnosisData;

  return {
    getDiagnosis: getDiagnosis
  }

  function getDiagnosis(symptomIds) {
    var _Diagnosis = Diagnosis;

    var matchedDiagnosis = null;

    Underscore.each(_Diagnosis, function (diagnosisSymptomIds, diagnosis) {
      if (matchedDiagnosis !== null) return;

      if (isSymptomMatched(symptomIds, diagnosisSymptomIds)) {
        matchedDiagnosis = diagnosis;
      }
    });

    if (matchedDiagnosis !== null) {
      matchedDiagnosis = $injector.get(matchedDiagnosis);
    }

    return matchedDiagnosis;
  }

  function isSymptomMatched(symtomIds, diagnosisSymptomIds) {
    var isMatched = true;

    isMatched = isMatched && (Underscore.difference(symtomIds, diagnosisSymptomIds).length == 0);
    isMatched = isMatched && (Underscore.difference(diagnosisSymptomIds, symtomIds).length == 0);

    return isMatched;
  }

})
