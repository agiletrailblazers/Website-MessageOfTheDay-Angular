'use strict';

/**
 * @ngdoc overview
 * @name messageOfTheDayAngularApp
 * @description
 * # messageOfTheDayAngularApp
 *
 * Main module of the application.
 */
angular
  .module('messageOfTheDayAngularApp', [
    'moment-picker',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'environment'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/motd.html',
        controller: 'motd-Controller',
        controllerAs: 'motd'
      })
      .when('/week', {
        templateUrl: 'views/motd-week.html',
        controller: 'motd-Week-Controller',
        controllerAs: 'motd-week'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .config(['envServiceProvider', function(envServiceProvider) {
    envServiceProvider.config({
      domains: {
        local: ['localhost', '127.0.0.1'],
        localPython: ['localPython'],
        development: ['update for deployment'],
        buildVerification: ['update for deployment'],
        production: ['update for deployment']
      },
      vars: {
        local: {
          apiServerUrl: 'http://localhost:8080'
        },
        localPython: {
          apiServerUrl: 'http://localhost:8000'
        },
        development: {
          apiServerUrl: 'http://54.174.93.238:8081/motd'
        },
        buildVerification: {
          apiServerUrl: 'http://54.237.237.215:8081/motd'
        },
        production: {
          apiServerUrl: 'http://54.237.237.215:8081/motd'
        },
        defaults: {
          apiServerUrl: 'http://env.override.required'
        }
      }
    });

    envServiceProvider.check();
  }]);
