App.factory('Symptoms', function (SymptomsData, Lodash) {

  var Symptoms = SymptomsData;

  return {
    getSelectedSymptomIds: getSelectedSymptomIds,
    getListOfSymptoms: getListOfSymptoms
  }

  function getListOfSymptoms(filter, selectedSymptomIds) {
    var _Symptoms = Symptoms;

    var symptoms = [];

    filter = filter && filter.trim().toLowerCase();

    // convert to array
    Lodash.forEach(_Symptoms, function (symptom, symptomId) {
      symptom = Lodash.assign({
        symptomId: symptomId
      }, symptom);

      symptom.isSelected = (selectedSymptomIds && selectedSymptomIds.indexOf(symptomId) !== -1);

      // filter by name, with type is "start with"
      symptom.isVisible = (symptom.isSelected || (!filter || (filter && symptom.name.toLowerCase().indexOf(filter) === 0)));

      symptoms.push(symptom);
    });

    // return the sorted list by symptom's name with letter
    return getSortedListWithLetter(symptoms, 'name');
  }

  function getSelectedSymptomIds(symptoms) {
    var selectedSymptoms = Lodash.where(symptoms, {
      isSelected: true
    });

    var selectedSymptomIds = Lodash.pluck(selectedSymptoms, 'symptomId');

    return selectedSymptomIds;
  }

  function getSortedListWithLetter(items, attr) {
    var list = [];
    var letter = null;
    var visibleCount = 0;
    var letterItem, letterVisible;

    // sort by attr
    items = Lodash.sortBy(items, function (item) {
      return item[attr];
    });

    for (var i = 0, len = items.length; i < len; i++) {
      var item = items[i];

      var firstChar = item[attr] || "";
      firstChar = firstChar.trim().charAt(0).toUpperCase();

      if (firstChar !== letter) {
        if (letterItem) {
          letterItem.isVisible = (visibleCount > 0);
        }

        letter = firstChar;
        visibleCount = 0;

        letterItem = {
          _isLetter: true
        };
        letterItem[attr] = letter;

        list.push(letterItem);
      }

      visibleCount += item.isVisible;

      list.push(item);
    }

    if (letterItem) {
      letterItem.isVisible = (visibleCount > 0);
    }

    return list;
  }

})
