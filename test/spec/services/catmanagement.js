'use strict';

describe('Service: catmanagement', function () {

  // load the service's module
  beforeEach(module('bookmarksApp'));

  // instantiate service
  var catmanagement;
  beforeEach(inject(function (_catmanagement_) {
    catmanagement = _catmanagement_;
  }));

  it('should do something', function () {
    expect(!!catmanagement).toBe(true);
  });

});
