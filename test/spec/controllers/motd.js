'use strict';

describe('Controller: motd-Controller', function () {

  // load the controller's module
  beforeEach(module('messageOfTheDayAngularApp'));

  var motdCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    motdCtrl = $controller('motd-Controller', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should expect a title from the page', function () {
    expect(motdCtrl.$parent.title).toBe("Message of the Day");
  });
});
