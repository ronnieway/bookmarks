'use strict';

describe('Controller: Angular2Ctrl', function () {

  // load the controller's module
  beforeEach(module('bookmarksApp'));

  var Angular2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Angular2Ctrl = $controller('Angular2Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Angular2Ctrl.awesomeThings.length).toBe(3);
  });
});
