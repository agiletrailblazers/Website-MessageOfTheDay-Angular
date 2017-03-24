'use strict';

/**
 * @ngdoc function
 * @name messageOfTheDayAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the messageOfTheDayAngularApp
 */
angular.module('messageOfTheDayAngularApp')
  .controller('motd-Week-Controller', function ($scope) {
    $scope.$parent.title = "Messages of the Week";
    $scope.messages = ['Monday','Tuesday','Wednesday'];
  });
