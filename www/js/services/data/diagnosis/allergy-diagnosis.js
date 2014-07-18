App.factory('AllergyDiagnosis', function (DiagnosisBuilder) {

  var messages = {
    'M001': 'Sorry! No medicines found',
    'M002': 'Test messae 01'
  };

  var questions = {
    'Q001': {
      type: 'AGE',
      answer: {
        min: 0,
        max: 120
      }
    },
    'Q002': {
      type: 'GENDER'
    },
    'Q003': {
      type: 'PREGNANT'
    },
    'Q004': {
      type: 'YES_NO',
      text: 'Do you have a high fever or sign of infections?'
    },
    'Q005': {
      type: 'YES_NO',
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
        'AGE [0, 120]': 'R002'
      }
    },
    'R002': {
      messages: ['M002'],
      question: 'Q002',
      answer: {
        'MALE': 'R004',
        'FEMALE': 'R003'
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
        'NO': 'R101'
      }
    },

    'R100': {
      medicines: ['children-tyenol', 'children-motrin']
    },

    'R101': {
      messages: ['M001']
    }
  }

  return DiagnosisBuilder.buildDiagnosis({
    questions: questions,
    messages: messages,
    roadmap: roadmap,
    startRoadmap: 'R001'
  });

})
