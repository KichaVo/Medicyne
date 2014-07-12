angular.module('medicyne', ['ionic', 'app.controllers'])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'tmpl/home.html',
      controller: 'HomeCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'tmpl/login.html',
      controller: 'LoginCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'tmpl/register.html',
      controller: 'RegisterCtrl'
    })
    .state('otc', {
      url: '/otc',
      templateUrl: 'tmpl/otc.html',
      controller: 'OtcCtrl'
    });

  $urlRouterProvider.otherwise('/login');
});
