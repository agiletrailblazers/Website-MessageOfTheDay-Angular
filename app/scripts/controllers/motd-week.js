'use strict';

/**
 * @ngdoc function
 * @name messageOfTheDayAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the messageOfTheDayAngularApp
 */
angular.module('messageOfTheDayAngularApp')
  .controller('motd-Week-Controller', ['$scope', '$http', 'envService', function($scope, $http, envService) {
    $scope.$parent.title = "Messages of the Week";
    $scope.messages = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  });
