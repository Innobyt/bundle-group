'use strict';

angular
    .module('gamebundleApp')
    .factory('repository', repository);

repository.$inject = ['$resource'];

function repository($resource) {
    return $resource('/api/gamebundles/:id', { id: '@id' },
    {
      'update': { method: 'PUT',},
      'view': { method: 'GET', isArray: true},
      'query': { method: 'GET', isArray: true }
    });
  }
