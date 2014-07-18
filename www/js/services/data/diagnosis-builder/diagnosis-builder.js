App.factory('DiagnosisBuilder', function (DiagnosisAnswerChecker, DiagnosisQuestion, Underscore) {

  function Question(question) {
    Underscore.extend(this, question);
  }

  function BaseDiagnosis(diagnosis) {
    this.diagnosis = diagnosis;

    this.reset();
  }

  BaseDiagnosis.prototype.reset = function () {
    this.currentRoadmapId = this.diagnosis.startRoadmap;

    this.medicines = null;
    this.question = null;

    this.isStarted = false;
    this.isDone = false;
  }

  BaseDiagnosis.prototype.next = function (answer) {
    if (this.isDone) return false;

    var nextRoadmap;

    var currentRoadmap = this.diagnosis.roadmap[this.currentRoadmapId];

    if (this.isStarted) {
      var nextRoadmapId = null;

      Underscore.each(currentRoadmap.answer, function (roadmapId, pattern) {
        if (nextRoadmapId) return;

        if (DiagnosisAnswerChecker.check(pattern, answer)) {
          nextRoadmapId = roadmapId;
        }
      });

      if (nextRoadmapId) {
        nextRoadmap = this.diagnosis.roadmap[nextRoadmapId];
        this.currentRoadmapId = nextRoadmapId;
      }
    } else {
      nextRoadmap = currentRoadmap;
      this.isStarted = true;
    }

    // message
    if (nextRoadmap.messages) {
      this.hasMessages = true;
      this.messages = [].concat(nextRoadmap.messages);

      // get message from messageId
      for (var i = 0, len = this.messages.length; i < len; i++) {
        var messageId = this.messages[i];
        var message = this.diagnosis.messages[messageId];

        this.messages[i] = message;
      }
    } else {
      this.hasMessages = false;
      this.messages = null;
    }

    if (nextRoadmap.question) {
      // has next question
      var question = this.diagnosis.questions[nextRoadmap.question];
      this.question = DiagnosisQuestion.createQuestion(question);

      return true;
    } else {
      // diagnosis done

      if (nextRoadmap.medicines && nextRoadmap.medicines.length) {
        this.hasMedicines = true;
        this.medicines = nextRoadmap.medicines;
      } else {
        this.hasMedicines = false;
        this.medicines = null;
      }

      this.isDone = true;
      this.question = null;

      return false;
    }
  }

  return {
    buildDiagnosis: function (diagnosis) {
      return new BaseDiagnosis(diagnosis);
    }
  }

})
