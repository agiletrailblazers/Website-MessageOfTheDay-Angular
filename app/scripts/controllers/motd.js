'use strict';

/**
 * @ngdoc function
 * @name messageOfTheDayAngularApp.controller:motd-Controller
 * @description
 * # motd-Controller
 * Controller of the messageOfTheDayAngularApp
 */
angular.module('messageOfTheDayAngularApp')
  .controller('motd-Controller', ['$scope', '$http', 'envService', function($scope, $http, envService) {
    $scope.$parent.title = 'Message of the Day';

    var targetURL = envService.read('apiServerUrl');
    $http({
      method: 'GET',
      url: targetURL + '/messages'
    }).
    then(function(response) {
      if (response.status == 200) {
        $scope.messageOfTheDay = response.data.message;
      } else {
        $scope.loadError = 'FIGURE OUT THE ERROR';
      }
    });

    $scope.getMessageByDate = function(dateString) {
        console.log(envService.get());
        $http({
          method: 'GET',
          url: targetURL + '/messages/' + new Date(dateString).getTime()
        }).
        then(function(response) {
          if (response.status == 200) {
            $scope.messageOfTheDay = response.data.message;
          } else {
            $scope.loadError = 'FIGURE OUT THE ERROR';
          }
        });
    }
}]);
