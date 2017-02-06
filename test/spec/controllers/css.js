'use strict';

describe('Controller: CssCtrl', function () {

  // load the controller's module
  beforeEach(module('bookmarksApp'));

  var CssCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CssCtrl = $controller('CssCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CssCtrl.awesomeThings.length).toBe(3);
  });
});
