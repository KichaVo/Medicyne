App.factory('Diagnosis', function (DiagnosisData, Lodash, $injector) {

  var Diagnosis = DiagnosisData;

  return {
    getDiagnosis: getDiagnosis
  }

  function getDiagnosis(symptomIds) {
    var _Diagnosis = Diagnosis;

    var matchedDiagnosis = null;

    Lodash.forEach(_Diagnosis, function (diagnosisSymptomIds, diagnosis) {
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

    isMatched = isMatched && (Lodash.difference(symtomIds, diagnosisSymptomIds).length == 0);
    isMatched = isMatched && (Lodash.difference(diagnosisSymptomIds, symtomIds).length == 0);

    return isMatched;
  }

})
