'use strict';

describe('Controller: GameBundleCtrl', function () {

  // load the controller's module
  beforeEach(module('gamebundleApp'));

  var GameBundleCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameBundleCtrl = $controller('GameBundleCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
