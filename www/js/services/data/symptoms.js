App.factory('Symptoms', function (SymptomsData, Underscore) {

  var Symptoms = SymptomsData;

  return {
    getSelectedSymptomIds: getSelectedSymptomIds,
    getListOfSymptoms: getListOfSymptoms
  }

  function getListOfSymptoms(filter, selectedSymptomIds) {
    var _Symptoms = Symptoms;

    var symptoms = [];

    filter = filter && filter.trim();

    // convert to array
    Underscore.each(_Symptoms, function (symptom, symptomId) {
      symptom = Underscore.extend({
        symptomId: symptomId
      }, symptom);

      // filter by name, with type is "start with"
      symptom.isVisible = (!filter || (filter && symptom.name.toLowerCase().indexOf(filter) === 0));
      symptom.isSelected = (selectedSymptomIds && selectedSymptomIds.indexOf(symptomId) !== -1);

      symptoms.push(symptom);
    });

    // return the sorted list by symptom's name with letter
    return getSortedListWithLetter(symptoms, 'name');
  }

  function getSelectedSymptomIds(symptoms) {
    var selectedSymptoms = Underscore.where(symptoms, {
      isSelected: true
    });

    var selectedSymptomIds = Underscore.pluck(selectedSymptoms, 'symptomId');

    return selectedSymptomIds;
  }

  function getSortedListWithLetter(items, attr) {
    var list = [];
    var letter = null;

    // sort by attr
    items = Underscore.sortBy(items, function (item) {
      return item[attr];
    });

    for (var i = 0, len = items.length; i < len; i++) {
      var item = items[i];

      var firstChar = item[attr] || "";
      firstChar = firstChar.trim().charAt(0).toUpperCase();

      if (firstChar !== letter) {
        letter = firstChar;

        var letterItem = {
          _isLetter: true,
          isVisible: true
        };
        letterItem[attr] = letter;

        list.push(letterItem);
      }

      list.push(item);
    }

    return list;
  }

})
