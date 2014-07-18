App.factory('HeadacheQuestion', function () {

  return {

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
    'Q008': {
      type: 'YES_NO',
      text: 'Are you pain medication for headache more than 3 days per week?'
    },
    'Q009': {
      type: 'YES_NO',
      text: 'Which of the following best describes your headache?'
    }

  }

})
