App.factory('AllergyRoadmap', function () {

  return {

    startRoadmap: 'R001',

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
        'YES': 'R006',
        'NO': 'R006'
      }
    },
    'R005': {
      question: 'Q005',
      answer: {
        'YES': 'R100',
        'NO': 'R101'
      }
    },
    'R006': {
      question: 'Q006',
      answer: {
        'TEXT A': 'R100',
        'TEXT B': 'R101'
      }
    },

    'R100': {
      medicines: ['children-tyenol', 'children-motrin']
    },
    'R101': {
      messages: ['M001']
    }

  }

})
