angular
  .module('clientCall', ["ui.router"])
  .config(config)

  function config($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('login', {
      url: '/',
      controller: 'LoginController',
      templateUrl: 'app/views/login.html'
    }).state('newCall', {
      url: '/newCall',
      controller: 'NewCallController',
      templateUrl: 'app/views/newCall.html'
    }).state('newPatient', {
      url: '/newPatient',
      controller: 'NewPatientController',
      templateUrl: 'app/views/newPatient.html'
    }).state('existingPatient', {
      url: '/existingPatient',
      controller: 'ExistingPatientController',
      templateUrl: 'app/views/existingPatient.html'
    }).state('other', {
      url: '/other',
      controller: 'OtherController',
      templateUrl: 'app/views/other.html'
    }).state('appSched', {
      url: '/appSched',
      controller: 'AppointmentSchedController',
      templateUrl: 'app/views/appSched.html'
    })
};
