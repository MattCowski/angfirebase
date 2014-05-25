'use strict';

this.angFbKtsApp = angular.module('angFbKtsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    // 'angularfire',
    'angularfire.login'
]);

this.angFbKtsApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        authRequired: false, // if true, must log in before viewing this page
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
