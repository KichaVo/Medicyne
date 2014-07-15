App.controller('LoginCtrl', function ($scope, $location) {

  $scope.doLogin = function () {
    $location.path('/');
  };

  $scope.openRegister = function () {
    $location.path('/register');
  };

  $scope.openOtc = function () {
    $location.path('/anonymous');
  }

})
