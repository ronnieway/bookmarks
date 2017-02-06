'use strict';

describe('Controller: ReactCtrl', function () {

  // load the controller's module
  beforeEach(module('bookmarksApp'));

  var ReactCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReactCtrl = $controller('ReactCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReactCtrl.awesomeThings.length).toBe(3);
  });
});
