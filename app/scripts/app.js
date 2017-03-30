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
    'ngTouch'
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
  }]);
