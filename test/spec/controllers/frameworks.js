'use strict';

describe('Controller: FrameworksCtrl', function () {

  // load the controller's module
  beforeEach(module('bookmarksApp'));

  var FrameworksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FrameworksCtrl = $controller('FrameworksCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FrameworksCtrl.awesomeThings.length).toBe(3);
  });
});
