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

.controller('RegisterCtrl', function ($scope, $ionicModal, $location) {
  $scope.doRegister = function () {
    $location.path('/');
  };
})

.controller('AnonymousCtrl', function ($scope, $ionicModal, $location) {
  $scope.openSymptom = function () {
    $location.path('/symptom');
  };
})

.controller('SymptomCtrl', function ($scope, $ionicModal, $location) {
  $scope.openConversation = function() {
    console.log($scope.data);

    $location.path('/conversation');
  };

  $scope.data = {
    symptoms: [{
      name: 'A',
      isCategory: true
    }, {
        name: 'Symtom A',
    }, {
        name: 'B',
        isCategory: true
    }, {
        name: 'Symtom B1',
    }, {
        name: 'Symtom B2',
    }, {
        name: 'B',
        isCategory: true
    }, {
        name: 'Symtom B1',
    }, {
        name: 'Symtom B2',
    }, {
        name: 'B',
        isCategory: true
    }, {
        name: 'Symtom B1',
    }, {
        name: 'Symtom B2',
    }, {
        name: 'B',
        isCategory: true
    }, {
        name: 'Symtom B1',
    }, {
        name: 'Symtom B2',
    }, {
        name: 'B',
        isCategory: true
    }, {
        name: 'Symtom B1',
    }, {
        name: 'Symtom B2',
    }, {
        name: 'B',
        isCategory: true
    }, {
        name: 'Symtom B1',
    }, {
        name: 'Symtom B2',
    }, {
        name: 'B',
        isCategory: true
    }, {
        name: 'Symtom B1',
    }, {
        name: 'Symtom B2',
    }, {
        name: 'B',
        isCategory: true
    }, {
        name: 'Symtom B1',
    }, {
        name: 'Symtom B2',
    }, {
        name: 'B',
        isCategory: true
    }, {
        name: 'Symtom B1',
    }, {
        name: 'Symtom B2',
    }]
  };


})
