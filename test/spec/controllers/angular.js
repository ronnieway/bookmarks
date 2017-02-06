'use strict';

describe('Controller: AngularCtrl', function () {

  // load the controller's module
  beforeEach(module('bookmarksApp'));

  var AngularCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AngularCtrl = $controller('AngularCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AngularCtrl.awesomeThings.length).toBe(3);
  });
});
