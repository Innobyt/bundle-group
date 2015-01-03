'use strict';

angular
    .module('gamebundleApp')
    .factory('repository', repository);

repository.$inject = ['$resource'];

function repository($resource) {
    return $resource('/api/gamebundles/:id', { id: '@_id' },
    {
			'update': { method: 'PUT' },
			'view': { method: 'GET', isArray: false },
			'query': { method: 'GET', isArray: true },
		});
  }
