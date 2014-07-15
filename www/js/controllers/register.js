App.controller('RegisterCtrl', function ($scope, $location) {

  $scope.doRegister = function () {
    $location.path('/');
  };

})
