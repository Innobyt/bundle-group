'use strict';

angular.module('gamebundleApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('game-redemption-redeem', {
        url: '/game-redemption',
        templateUrl: 'app/game-redemption/redemption.html',
        controller: 'GameRedemptionCtrl'
      })
	  .state('game-redemption-admin', {
        url: '/game-redemption/admin',
        templateUrl: 'app/game-redemption/dashboard.html',
        controller: 'DashboardCtrl'
      });
  });
