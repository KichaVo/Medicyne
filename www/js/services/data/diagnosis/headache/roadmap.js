App.factory('HeadacheRoadmap', function () {

  return {

    startRoadmap: 'R001',

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
    'R008': {
      question: 'Q008',
      answer: {
        'YES': 'R103',
        'NO': 'R009'
      }
    },
    'R009': {
      question: 'Q009',
      answer: {
        'YES': 'R103',
        'NO': 'R009'
      }
    },

    'R100': {
      medicines: ['children-tyenol', 'children-motrin']
    },

    'R101': {
      messages: ['M001']
    },

    'R102': {
      messages: ['M002']
    },

    'R103': {
      messages: ['M003']
    },

    'R104': {
      messages: ['M004']
    }

  }

})
