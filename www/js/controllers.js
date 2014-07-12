angular.module('app.controllers', [])

.directive('detectGestures', function ($ionicGesture) {
  return {
    restrict: 'A',

    link: function (scope, elem, attrs) {
      var gestureType = attrs.gestureType;

      switch (gestureType) {
      case 'swipe':
        $ionicGesture.on('swipe', scope.reportEvent, elem);
        break;
      case 'swipeup':
        $ionicGesture.on('swipeup', scope.reportEvent, elem);
        break;
      case 'swiperight':
        $ionicGesture.on('swiperight', scope.reportEvent, elem);
        break;
      case 'swipeleft':
        $ionicGesture.on('swipeleft', scope.reportEvent, elem);
        break;
      case 'doubletap':
        $ionicGesture.on('doubletap', scope.reportEvent, elem);
        break;
      case 'tap':
        $ionicGesture.on('tap', scope.reportEvent, elem);
        break;
      case 'scroll':
        $ionicGesture.on('scroll', scope.reportEvent, elem);
        break;
      }

    }
  }
})

.controller('AppCtrl', function ($scope, $ionicModal, $location) {

})

.controller('HomeCtrl', function ($scope, $ionicModal, $location) {
  $scope.openHistory = function () {
    $location.path('/history');
  };

  $scope.openSymptom = function () {
    $location.path('/symptom');
  };
})

.controller('LoginCtrl', function ($scope, $timeout, $ionicModal, $location) {
  var isSkipActive;

  $scope.doLogin = function () {
    $location.path('/');
  };

  $scope.openRegister = function () {
    $location.path('/register');
  };


  $scope.reportEvent = function (event) {
    if (event.type === 'swipeup' && isSkipActive) {

      $timeout(function () {
        isSkipActive = false;
        $location.path('/otc');
      });
    }
  };

  $scope.procressSkip = function ($event) {
    var target = $event.target;

    var skipButtonId = 'skip-button';

    isSkipActive =
      (target.id == skipButtonId) ||
      (target.parentNode && target.parentNode.id == skipButtonId);
  };
})

.controller('RegisterCtrl', function ($scope, $ionicModal, $location) {
  $scope.login = function () {
    $location.path('/');
  };
})

.controller('OtcCtrl', function ($scope, $ionicModal, $location) {

})
