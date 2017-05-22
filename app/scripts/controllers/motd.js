'use strict';

/**
 * @ngdoc function
 * @name messageOfTheDayAngularApp.controller:motd-Controller
 * @description
 * # motd-Controller
 * Controller of the messageOfTheDayAngularApp
 */
angular.module('messageOfTheDayAngularApp')
  .controller('motd-Controller', function($scope, $http) {
    $scope.$parent.title = "Message of the Day";

    // var targetURL = config("properties").apiServerUrl + '/messages';
    $http({
      method: 'GET',
      url: 'http://localhost:8080' + '/messages'
    }).
    then(function(response) {
      console.log("Response", response);

      if (response.status == 200) {
        $scope.messageOfTheDay = response.data.message;
      } else {
        $scope.loadError = "FIGURE OUT THE ERROR";
      }
    });

    $scope.getMessageByDate = function(dateString) {
        $http({
          method: 'GET',
          url: 'http://localhost:8080' + '/messages/' + new Date(dateString).getTime()
        }).
        then(function(response) {
          if (response.status == 200) {
            $scope.messageOfTheDay = response.data.message;
          } else {
            $scope.loadError = "FIGURE OUT THE ERROR";
          }
        });
    }
  });
