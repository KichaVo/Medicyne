App.factory('AllergyQuestion', function () {

  return {

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
    'Q006': {
      type: 'TEXT',
      text: 'Do you have a high fever or sign of infections?',
      answer: ['A', 'B']
    }

  }

})
