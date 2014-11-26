(function() {
	'use strict';

	angular.module('gamebundleApp')
	  .controller('DeleteCtrl', ['$scope', 'gameBundle', DeleteCtrl]);

	// DeleteCtrl requires for this module requires 2 actions of CRUD
	// R as in retrieve all, D as in delete 
	function DeleteCtrl($scope, gameBundle) {

		// get, all gamebundle ('R' in Crud)
		$scope.readall = function(){
			var gamebundle = gameBundle.query(function() {
				$scope.gamebundle = gamebundle;
			});
		};

		// delete, gamebundle ('D' in Crud)
		$scope.delete = function(id) {
			gameBundle.delete({ id: id }, function() {
				$scope.initialize();
			});
		};

		// initialize gamebundle controller and services
		$scope.initialize = function(){
			$scope.readall();
			$scope.formData = new gameBundle();
			$scope.formData.gamelist = [{'name':''}];
		};

		$scope.initialize();
	};

})();