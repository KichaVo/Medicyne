App.factory('Medicines', function (MedicinesData) {

  var Medicines = MedicinesData;

  return {
    getMedicine: getMedicine,
    getMedicines: getMedicines
  }

  function getMedicine(medicineId) {
    var medicine = {
      medicineId: medicineId,
      name: MedicinesData[medicineId].name,
      img: MedicinesData[medicineId].img,
    }

    if (!medicine.img) medicine.img = medicine.medicineId + '.png';

    return medicine;
  }

  function getMedicines(medicineIds) {
    var medicines = [];

    for (var i = 0, len = medicineIds.length; i < len; i++) {
      medicines.push(getMedicine(medicineIds[i]));
    }

    return medicines;
  }

})
