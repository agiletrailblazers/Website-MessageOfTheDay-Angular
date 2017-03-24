'use strict';

describe('Controller: motd-Week-Controller', function () {

  // load the controller's module
  beforeEach(module('messageOfTheDayAngularApp'));

  var motdWeekCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    motdWeekCtrl = $controller('motd-Week-Controller', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should expect a title from the page', function () {
    expect(motdWeekCtrl.$parent.title).toBe("Messages of the Week");
  });
});
