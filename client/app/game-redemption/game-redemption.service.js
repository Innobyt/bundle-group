(function() {
	'use strict';

	angular
	    .module('gamebundleApp')
	    .factory('gameRedemption', ['$resource', gameRedemption]);

	function gameRedemption($resource) {
		return $resource('/api/game-redemption/:id', {}, {
			update: { method: 'PUT', params: { id: '@id' } }
		});
	}
})();