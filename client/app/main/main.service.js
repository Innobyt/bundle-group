(function() {
	'use strict';

	angular
	    .module('gamebundleApp')
	    .factory('mainservice', ['$resource', mainservice]);

	function mainservice($resource) {
		return $resource('/api/gameredemptions/:id', {}, {
			update: { method: 'PUT', params: { id: '@id' } }
		});
	}
})();