App.factory('ControllerStorage', function () {

  var controllerData = {};

  var settingStorage = localStorage;

  return {
    setData: setData,
    getData: getData,
    removeData: removeData,

    setSetting: setSetting,
    getSetting: getSetting,
    removeSetting: removeSetting
  }

  // controller data

  function setData(key, value) {
    controllerData[key] = value;
  }

  function getData(key, defaultValue) {
    var value = controllerData[key];

    return (value === undefined) ? defaultValue : value;
  }

  function removeData(key) {
    delete controllerData[key];
  }

  // controller setting

  function setSetting(key, value) {
    value = JSON.stringify(value);

    settingStorage.setItem(key, value);
  }

  function getSetting(key, defaultValue) {
    var value = settingStorage.getItem(key);

    return (value === undefined) ? defaultValue : JSON.parse(value);
  }

  function removeSetting(key) {
    settingStorage.removeItem(key);
  }

})
