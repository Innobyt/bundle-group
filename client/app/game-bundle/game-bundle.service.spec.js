'use strict';

describe('Service: gameBundle', function () {

  // load the service's module
  beforeEach(module('gamebundleApp'));

  // instantiate service
  var gameBundle;
  beforeEach(inject(function (_gameBundle_) {
    gameBundle = _gameBundle_;
  }));

  it('should do something', function () {
    expect(!!gameBundle).toBe(true);
  });

});
