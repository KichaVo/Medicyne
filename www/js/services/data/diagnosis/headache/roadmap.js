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
        'YES': 'R999',
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
        'NUMBER [0, 1}': 'R997',
        'NUMBER [1, 7}': 'R005',
        'NUMBER [7, 10]': 'R102'
      }
    },
    'R005': {
      question: 'Q005',
      answer: {
        'YES': 'R102',
        'NO': 'R006'
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
        'TEXT A': 'R104',
        'TEXT B': 'R010',
        'TEXT C': 'R021',
        'TEXT D': 'R031'
      }
    },
    'R010': {
      question: 'Q010',
      answer: {
        'YES': 'R011',
        'NO': 'R012'
      }
    },
    'R011': {
      question: 'Q003',
      answer: {
        'AGE [8, 12}': 'R201',
        'AGE [12, ?]': 'R202'
      }
    },
    'R012': {
      question: 'Q003',
      answer: {
        'AGE [8, 12}': 'R203',
        'AGE [12, ?]': 'R204'
      }
    },

    'R021': {
      question: 'Q011',
      answer: {
        'YES': 'R011',
        'NO': 'R022'
      }
    },
    'R022': {
      question: 'Q003',
      answer: {
        'AGE [8, 12}': 'R205',
        'AGE [12, 18}': 'R206',
        'AGE [18, ?]': 'R207'
      }
    },

    'R031': {
      question: 'Q012',
      answer: {
        'YES': 'R032',
        'NO': 'R033'
      }
    },
    'R032': {
      question: 'Q003',
      answer: {
        'AGE [8, 12}': 'R208',
        'AGE [12, ?]': 'R209'
      }
    },
    'R033': {
      question: 'Q003',
      answer: {
        'AGE [8, 12}': 'R210',
        'AGE [12, ?]': 'R211'
      }
    },
    'R999': {
      question: 'Q999',
      answer: {
        'YES': 'R998',
        'NO': 'R003'
      }
    },


    //===========================================================================================================================

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
    },

    'R997': {
      messages: ['M010']
    },

    'R998': {
      messages: ['M009']
    },
    //===========================================================================================================================

    'R201': {
      medicines: ['children-tylenol-syrup', 'tylenol-regular-strength-tablets']
    },
    'R202': {
      medicines: ['tylenol-regular-strength-tablets', 'tylenol-maximum-strength-tablets', 'children-tylenol-syrup']
    },
    'R203': {
      medicines: ['children-tylenol-syrup', 'tylenol-regular-strength-tablets', 'children-advil-suspension', 'junior-strength-advil-chewables', 'junior-strength-advil-tablets', 'childrens-motrin-suspension']
    },
    'R204': {
      medicines: ['tylenol-regular-strength-tablets', 'tylenol-maximum-strength-tablets', 'children-tylenol-syrup', 'excedrin-tension-headache-tablets', 'advil-tablet', 'advil-migraine', 'motrin']
    },
    'R205': {
      medicines: ['children-tylenol-syrup', 'tylenol-regular-strength-tablets']
    },
    'R206': {
      medicines: ['excedrin-extra-strength', 'advil-migraine', 'advil-tablet', 'tylenol-regular-strength-tablets', 'tylenol-maximum-strength-tablets', 'aleve']
    },
    'R207': {
      medicines: ['excedrin-extra-strength', 'excedrin-migraine', 'advil-migraine', 'advil-tablet', 'tylenol-regular-strength-tablets', 'tylenol-maximum-strength-tablets', 'aleve']
    }, //replace laji ta voi
    'R208': {
      messages: ['M008']
    },
    'R209': {
      medicines: ['tylenol-sinus-congestion-pain', 'robitussin-nasal-relief']
    },
    'R210': {
      messages: ['M008']
    },
    'R211': {
      medicines: ['tylenol-sinus-congestion-pain', 'robitussin-nasal-relief', 'advil-congestion-relief', 'advil-cold-and-sinus', 'aleve-D-sinus-and-cold', 'aleve-D-sinus-and-headache']
    }
  }
})
