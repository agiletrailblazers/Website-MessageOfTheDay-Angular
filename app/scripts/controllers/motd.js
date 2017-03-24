'use strict';

/**
 * @ngdoc function
 * @name messageOfTheDayAngularApp.controller:motd-Controller
 * @description
 * # motd-Controller
 * Controller of the messageOfTheDayAngularApp
 */
angular.module('messageOfTheDayAngularApp')
  .controller('motd-Controller', function($scope) {
    $scope.$parent.title = "Message of the Day";
  });
