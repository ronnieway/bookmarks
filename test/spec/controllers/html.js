'use strict';

describe('Controller: HtmlCtrl', function () {

  // load the controller's module
  beforeEach(module('bookmarksApp'));

  var HtmlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HtmlCtrl = $controller('HtmlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HtmlCtrl.awesomeThings.length).toBe(3);
  });
});
