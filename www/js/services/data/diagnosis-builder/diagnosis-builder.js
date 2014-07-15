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

    if (nextRoadmap.medicines) {
      // found medicine
      this.isDone = true;
      this.medicines = nextRoadmap.medicines;

      this.question = null;

      return false;
    } else {
      var question = this.diagnosis.questions[nextRoadmap.question];
      this.question = DiagnosisQuestion.createQuestion(question);

      return true;
    }
  }

  return {
    buildDiagnosis: function (diagnosis) {
      return new BaseDiagnosis(diagnosis);
    }
  }

})
