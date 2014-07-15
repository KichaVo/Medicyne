App.config(function ($stateProvider, $urlRouterProvider) {

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

  .state('anonymous', {
    url: '/anonymous',
    templateUrl: 'tmpl/anonymous.html',
    controller: 'AnonymousCtrl'
  })

  .state('symptom', {
    url: '/symptom',
    templateUrl: 'tmpl/symptom.html',
    controller: 'SymptomCtrl'
  })

  .state('agreement', {
    url: '/agreement',
    templateUrl: 'tmpl/agreement.html',
    controller: 'AgreementCtrl'
  })

  .state('conversation', {
    url: '/conversation',
    templateUrl: 'tmpl/conversation.html',
    controller: 'ConversationCtrl'
  })

  $urlRouterProvider.otherwise('/login');

})
