'use strict';

describe('Controller: EmberCtrl', function () {

  // load the controller's module
  beforeEach(module('bookmarksApp'));

  var EmberCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmberCtrl = $controller('EmberCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EmberCtrl.awesomeThings.length).toBe(3);
  });
});
