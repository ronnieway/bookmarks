'use strict';

describe('Controller: BackboneCtrl', function () {

  // load the controller's module
  beforeEach(module('bookmarksApp'));

  var BackboneCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BackboneCtrl = $controller('BackboneCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BackboneCtrl.awesomeThings.length).toBe(3);
  });
});
