App.factory('AllergyDiagnosis', function (DiagnosisBuilder) {

  var questions = {
    'Q001': {
      type: 'NUMBER',
      text: 'Type number',
      answer: {
        min: 10,
        max: 30
      }
    },
    'Q002': {
      type: 'YES/NO',
      text: 'Y/N for num 1 .. 10Y/N for num 1 .. 10Y/N for num 1 .. 10Y/N for num 1 .. 10Y/N for num 1 .. 10Y/N for num 1 .. 10'
    },
    'Q005': {
      type: 'YES/NO',
      text: 'Y/N for num 11 .. 20'
    },
    'Q006': {
      type: 'YES/NO',
      text: 'Y/N for num 21 .. 30'
    },
    'Q003': {
      type: 'YES/NO',
      text: 'Y from Y/N'
    },
    'Q004': {
      type: 'YES/NO',
      text: 'N from Y/N'
    }
  }

  var roadmap = {
    'R001': {
      question: 'Q001',
      answer: {
        'NUMBER [01, 10]': 'R002',
        'NUMBER [11, 20]': 'R005',
        'NUMBER [21, 30]': 'R006'
      }
    },
    'R002': {
      question: 'Q002',
      answer: {
        'YES': 'R003',
        'NO': 'R004'
      }
    },
    'R005': {
      question: 'Q005',
      answer: {
        'YES': 'R003',
        'NO': 'R004'
      }
    },
    'R006': {
      question: 'Q006',
      answer: {
        'YES': 'R003',
        'NO': 'R004'
      }
    },
    'R003': {
      question: 'Q003',
      answer: {
        'YES': 'R001',
        'NO': 'R001'
      }
    },
    'R004': {
      question: 'Q004',
      answer: {
        'YES': 'R100',
        'NO': 'R001'
      }
    },

    'R100': {
      medicine: 'M001'
    }
  }

  return DiagnosisBuilder.buildDiagnosis({
    questions: questions,
    roadmap: roadmap,
    startRoadmap: 'R002'
  });

})
