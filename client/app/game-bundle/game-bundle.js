'use strict';

angular.module('gamebundleApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('gamebundle-create', {
        url: '/game-bundle/create',
        templateUrl: 'app/game-bundle/create/create.html',
        controller: 'CreateCtrl'
      })
      .state('gamebundle-retrieve', {
        url: '/game-bundle/retrieve',
        templateUrl: 'app/game-bundle/retrieve/retrieve.html',
        controller: 'RetrieveCtrl'
      })
      .state('gamebundle-update', {
        url: '/game-bundle/update',
        templateUrl: 'app/game-bundle/update/update.html',
        controller: 'UpdateCtrl'
      })
      .state('gamebundle-delete', {
        url: '/game-bundle/delete',
        templateUrl: 'app/game-bundle/delete/delete.html',
        controller: 'DeleteCtrl'
      });
  });