'use strict';

describe('Controller: LibrariesCtrl', function () {

  // load the controller's module
  beforeEach(module('bookmarksApp'));

  var LibrariesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LibrariesCtrl = $controller('LibrariesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LibrariesCtrl.awesomeThings.length).toBe(3);
  });
});
