'use strict';

angular.module('gamebundleApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('gamebundle', {
        url: '/game-bundle',
        templateUrl: 'app/game-bundle/gamebundle.html',
        controller: 'GameBundleCtrl'
      });
  });