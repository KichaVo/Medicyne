App.factory('HeadacheDiagnosis', function (DiagnosisBuilder) {

  var questions = {

    'Q001': {
      type: 'GENDER'
    },
    'Q002': {
      type: 'PREGNANT'
    },
    'Q003': {
      type: 'AGE',
      answer: {
        min: 0,
        max: 120
      }
    },
    'Q004': {
      type: 'NUMBER',
      text: 'Pain scale (0 = no pain, 10 = severe pain)',
      answer: {
        min: 0,
        max: 10
      }
    },
    'Q005': {
      type: 'YES_NO',
      text: 'How long have you experienced this headache? (<10 days)'
    },
    'Q006': {
      type: 'YES_NO',
      text: 'Do you have a high fever or sign of infections?'
    },
    'Q007': {
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
        'MALE': 'R003',
        'FEMALE': 'R002'
      }
    },
    'R002': {
      question: 'Q002',
      answer: {
        'YES': 'R003',
        'NO': 'R003'
      }
    },
    'R003': {
      question: 'Q003',
      answer: {
        'AGE [0, 8}': 'R101',
        'AGE [8, 120]': 'R004'
      }
    },
    'R004': {
      question: 'Q004',
      answer: {
        'NUMBER [0, 7}': 'R005',
        'NUMBER [7, 10]': 'R102'
      }
    },
    'R005': {
      question: 'Q005',
      answer: {
        'YES': 'R006',
        'NO': 'R102'
      }
    },
    'R006': {
      question: 'Q006',
      answer: {
        'YES': 'R102',
        'NO': 'R007'
      }
    },
    'R007': {
      question: 'Q007',
      answer: {
        'YES': 'R102',
        'NO': 'R008'
      }
    },

    'R100': {
      medicines: ['children-tyenol', 'children-motrin']
    },

    'R101': {
      message: 'Sorry little cutie pie, you are too new to this world and we scientists do not really understand your body yet. Over-the-counter (OTC) medications are not recommended for your age group. Ask mommy or daddy to take you to your pediatrician.'
    },

    'R102': {
      message: 'Over-the-counter (OTC) medications are not approriat for the severity of your current condition. Your condition may be serious and needs to be evaluated by a physician.'
    }
  }

  return DiagnosisBuilder.buildDiagnosis({
    questions: questions,
    roadmap: roadmap,
    startRoadmap: 'R001'
  });

})
