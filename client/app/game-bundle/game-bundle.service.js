(function() {
	'use strict';

	angular
	    .module('gamebundleApp')
	    .factory('gameBundle', ['$resource', gameBundle]);

	function gameBundle($resource) {
		return $resource('/api/game-bundle/:id', {}, {
			update: { method: 'PUT', params: { id: '@id' } }
		});
	}
})();