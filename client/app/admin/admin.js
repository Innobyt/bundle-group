'use strict';

angular.module('gamebundleApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/dashboard.html',
        controller: 'AdminCtrl'
      });
  });
