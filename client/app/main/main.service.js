(function() {
	'use strict';

	angular
	    .module('gamebundleApp')
	    .factory('mainService', ['$resource', mainService]);

	function mainservice($resource) {
		return $resource('/api/gameredemptions/:id', {}, {
			update: { method: 'PUT', params: { id: '@id' } }
		});
	}
})();