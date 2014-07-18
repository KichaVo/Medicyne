App.factory('DiagnosisAnswerChecker', function (Underscore) {

  return {
    check: check
  }

  function check(pattern, value) {
    var pattern = upperCaseTrim(pattern);

    if (pattern === 'YES') {
      return YesChecker(value);
    }

    if (pattern === 'NO') {
      return NoChecker(value);
    }

    if (pattern === 'MALE') {
      return MaleChecker(value);
    }

    if (pattern === 'FEMALE') {
      return FemaleChecker(value);
    }

    if (startWith(pattern, 'NUMBER')) {
      pattern = trimLeftBy(pattern, 'NUMBER');

      return NumberChecker(value, pattern);
    }

    if (startWith(pattern, 'AGE')) {
      pattern = trimLeftBy(pattern, 'AGE');

      return NumberChecker(value, pattern);
    }

    if (startWith(pattern, 'TEXT')) {
      pattern = trimLeftBy(pattern, 'TEXT');

      return TextChecker(value, pattern);
    }
  }

  function YesChecker(value) {
    // boolean: true
    if (value === true) return true;

    value = upperCaseTrim(value);

    // string: 'YES'
    return value === 'YES';
  }

  function NoChecker(value) {
    // boolean: false
    if (value === false) return false;

    value = upperCaseTrim(value);

    // string: 'NO'
    return value === 'NO';
  }

  function MaleChecker(value) {
    value = upperCaseTrim(value);

    // string: 'MALE'
    return value === 'MALE';
  }

  function FemaleChecker(value) {
    value = upperCaseTrim(value);

    // string: 'FEMALE'
    return value === 'FEMALE';
  }

  function NoChecker(value) {
    // boolean: false
    if (value === false) return false;

    value = upperCaseTrim(value);

    // string: 'NO'
    return value === 'NO';
  }

  function NumberChecker(value, pattern) {
    // convert to number
    value = +value;

    // for set of numbers
    if (startWith(pattern, '(') && endWith(pattern, ')')) {
      pattern = trimBy(pattern, '(', ')');

      var numbers = pattern.split(',')

      for (var i = 0, len = numbers.length; i < len; i++) {
        var number = +numbers[i].trim();

        if (number === value) return true;
      }

      return false;
    }

    // for range of numbers
    var startChar = left(pattern, 1);
    var endChar = right(pattern, 1);

    pattern = trim(pattern, 1, 1);

    var numbers = pattern.split(',');

    var startNumber = +numbers[0].trim();
    var endNumber = +numbers[1].trim();

    var matched = true;

    if (matched && startChar === '{') matched = isNaN(startNumber) || value > startNumber;
    if (matched && startChar === '[') matched = isNaN(startNumber) || value >= startNumber;
    if (matched && endChar === '}') matched = isNaN(endNumber) || value < endNumber;
    if (matched && endChar === ']') matched = isNaN(endNumber) || value <= endNumber;

    return matched;
  }

  function TextChecker(value, pattern) {
    value = (value || '').trim().toUpperCase();
    pattern = (pattern || '').trim().toUpperCase();

    return value === pattern;
  }

  // util functions

  function upperCaseTrim(str) {
    return ('' + str).toUpperCase().trim();
  }

  function left(str, len) {
    return str.slice(0, len).trim();
  }

  function right(str, len) {
    return str.slice(-len).trim();
  }

  function leftBy(str, by) {
    return left(str, by.length);
  }

  function rightBy(str, by) {
    return right(str, by.length);
  }

  function trimLeft(str, len) {
    return str.slice(len).trim();
  }

  function trimRight(str, len) {
    return str.slice(0, -len).trim();
  }

  function trim(str, lenLeft, lenRight) {
    return trimLeft(trimRight(str, lenRight), lenLeft);
  }

  function trimLeftBy(str, by) {
    return trimLeft(str, by.length);
  }

  function trimRightBy(str, by) {
    return trimRight(str, by.length);
  }

  function trimBy(str, byLeft, byRight) {
    return trimLeftBy(trimRightBy(str, byRight), byLeft);
  }

  function startWith(str, by) {
    by = by.trim();

    return leftBy(str, by) === by;
  }

  function endWith(str, by) {
    by = by.trim();

    return rightBy(str, by) === by;
  }

})
