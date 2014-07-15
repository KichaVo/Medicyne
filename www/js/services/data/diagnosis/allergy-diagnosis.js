App.factory('AllergyDiagnosis', function (DiagnosisBuilder) {

  var questions = {
    'Q001': {
      type: 'NUMBER',
      text: 'How old are you?',
      answer: {
        min: 0,
        max: 120
      }
    },
    'Q002': {
      type: 'YES/NO',
<<<<<<< HEAD
      text: 'Y/N<br> for num 1 .. 10Y/N for num 1 .. 10Y/N for num 1 .. 10Y/N for num 1 .. 10Y/N for num 1 .. 10Y/N for num 1 .. 10'
=======
      text: 'Are you a boy?'
>>>>>>> Medicyne/master
    },
    'Q003': {
      type: 'YES/NO',
      text: 'Are you pregnant?'
    },
    'Q004': {
      type: 'YES/NO',
      text: 'Do you have a high fever or sign of infections?'
    },
    'Q005': {
      type: 'YES/NO',
      text: '\
        Do you any of the following: <br> \
        1. History of liver disease or drink >= 3 alcoholic drinks per day. <br> \
        2. Headache caused by other medical condition. <br> \
        3. Throbbing head pain only on one side of your head that comes on suddenly, \
          but no formal diagnosis of migraine headache.'
    },
  }

  var roadmap = {
    'R001': {
      question: 'Q001',
      answer: {
        'NUMBER [0, 120]': 'R002'
      }
    },
    'R002': {
      question: 'Q002',
      answer: {
        'YES': 'R004',
        'NO': 'R003'
      }
    },
    'R003': {
      question: 'Q003',
      answer: {
        'YES': 'R004',
        'NO': 'R004'
      }
    },
    'R004': {
      question: 'Q004',
      answer: {
        'YES': 'R005',
        'NO': 'R005'
      }
    },
    'R005': {
      question: 'Q005',
      answer: {
        'YES': 'R100',
        'NO': 'R001'
      }
    },

    'R100': {
      medicines: ['children-tyenol', 'children-motrin']
    }
  }

  return DiagnosisBuilder.buildDiagnosis({
    questions: questions,
    roadmap: roadmap,
    startRoadmap: 'R001'
  });

})
