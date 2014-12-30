'use strict';

angular.module('gamebundleApp')
  .config(function ($stateProvider) {
    $stateProvider
	.state('create', {
        url: '/create',
        templateUrl: 'app/repository/create/create.html',
        controller: 'CreateCtrl',
        authenticate: true
      })
    .state('list', {
        url: '/list',
        templateUrl: 'app/repository/list/list.html',
        controller: 'ListCtrl',
        authenticate: true
      })
    .state('view', {
        url: '/view/:bundlename',
        templateUrl: 'app/repository/view/view.html',
        controller: 'ViewCtrl',
        authenticate: true
      })
      .state('update', {
        url: '/update/:bundlename',
        templateUrl: 'app/repository/update/update.html',
        controller: 'UpdateCtrl',
        authenticate: true
      });
  });

