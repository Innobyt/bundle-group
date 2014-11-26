(function() {
	'use strict';

	angular.module('gamebundleApp')
	  .controller('RetrieveCtrl', ['$scope', 'gameBundle', RetrieveCtrl]);

	// RetrieveCtrl requires 1 actions of CRUD, R as in retrieve
	function RetrieveCtrl($scope, gameBundle) {

		// get, all gamebundle ('R' in Crud)
		$scope.readall = function(){
			var gamebundle = gameBundle.query(function() {
				$scope.gamebundle = gamebundle;
			});
		};

		// initialize gamebundle controller and services
		$scope.initialize = function(){
			$scope.readall();
		};

		$scope.initialize();
	};
})();