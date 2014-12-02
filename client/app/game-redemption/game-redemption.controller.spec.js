'use strict';

describe('Controller: GameRedemptionCtrl', function () {

  // load the controller's module
  beforeEach(module('gamebundleApp'));

  var GameRedemptionCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameRedemptionCtrl = $controller('GameRedemptionCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
