App.factory('HeadacheQuestion', function () {

  return {

    'Q001': {
      type: 'GENDER'
    },
    'Q002': {
      type: 'PREGNANT'
    },
    'Q999': {
      type: 'YES_NO',
      text: 'Have you been pregnant for more than 27 weeks?'
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
      answer: {
        min: 0,
        max: 10
      },
      text: 'What is your current pain level (0 = no pain, 10 = severe pain)'
    },
    'Q005': {
      type: 'YES_NO',
      text: 'Have you experienced this headache for 10 days or more?' //(&lt;10 days)
    },
    'Q006': {
      type: 'YES_NO',
      text: 'Do you have a high fever or sign of infections?'
    },
    'Q007': {
      type: 'YES_NO',
      text: '\
        Do you any of the following: <br> \
        1. History of liver disease or drink &gt;= 3 alcoholic drinks per day. <br> \
        2. Headache caused by other medical condition. <br> \
        3. Throbbing head pain only on one side of your head that comes on suddenly, \
          but no formal diagnosis of migraine headache.'
    },
    'Q008': {
      type: 'YES_NO',
      text: 'Are you using pain medication for headache more than 3 days per week?'
    },
    'Q009': {
      type: 'TEXT',
      answer: ['A', 'B', 'C', 'D'],
      text: '\
            Which of the following best describes your headache? <br> \
            A. Serve pain on one side of the head, usually recurring in groups or cluster. <br> \
            B. From top of the head to base of skull, tight and squeezing pain that comes on slowly. Last for minutes to hours.<br> \
            C. One-sided, serve, throbbing pain that last between 4 and 72 hours. <br> \
            D. Pressure behind eyes or face, comes on with sinus symptoms (usually stuffy nose). Pain improves as sinus symptoms get better.'
    },
    'Q010': {
      type: 'YES_NO',
      text: '\
            Do you have any of the following: <br> \
            1. Asthma & nasal polyps. <br> \
            2. Chronic/recurrent stomach ulcers.<br> \
            3. Gout. <br> \
            4. Blood coagulation disorders or on blood thinner therapy. <br> \
            5. High blood pressure. <br> \
            6. Chronic heart failure. <br> \
            7. Kidney disease. <br> \
            8. Aspirin allergy.'
    },
    'Q011': {
      type: 'YES_NO',
      text: '\
            Do you have any of the following: <br> \
            1. Asthma & nasal polyps. <br> \
            2. Chronic/recurrent stomach ulcers.<br> \
            3. Gout. <br> \
            4. Blood coagulation disorders or on blood thinner therapy. <br> \
            5. High blood pressure. <br> \
            6. Chronic heart failure. <br> \
            7. Kidney disease. <br> \
            8. Aspirin allergy.'
    },
    'Q012': {
      type: 'YES_NO',
      text: '\
            Do you have any of the following: <br> \
            1. Asthma & nasal polyps. <br> \
            2. Chronic/recurrent stomach ulcers.<br> \
            3. Gout. <br> \
            4. Blood coagulation disorders or on blood thinner therapy. <br> \
            5. High blood pressure. <br> \
            6. Chronic heart failure. <br> \
            7. Kidney disease. <br> \
            8. Aspirin allergy.'
    }
  }

})
