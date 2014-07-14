App.controller('RegisterCtrl', function ($scope, $ionicModal, $location) {

  $scope.doRegister = function () {
    $location.path('/');
  };

})
