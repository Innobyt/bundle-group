(function() {
	'use strict';

	angular
	    .module('gameRedemptionApp')
	    .factory('gameRedemption', ['$resource', gameRedemptionApp]);

	function gameRedemption($resource) {
		return $resource('/api/game-redemption/:id', {}, {
			update: { method: 'PUT', params: { id: '@id' } }
		});
	}
})();