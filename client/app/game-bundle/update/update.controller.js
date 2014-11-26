(function() {
	'use strict';

	angular.module('gamebundleApp')
	  .controller('UpdateCtrl', ['$scope', 'gameBundle', UpdateCtrl]);

	// UpdateCtrl requires 2 actions of CRUD, 
	// 'R' as in retrieve, 'U' as in update
	function UpdateCtrl($scope, gameBundle) {

		// get, all gamebundle ('R' in Crud)
		$scope.readall = function(){
			var gamebundle = gameBundle.query(function() {
				$scope.gamebundle = gamebundle;
			});
		};

		// put, gamebundle update ('U' in Crud)
		$scope.update = function() {
			$scope.add_redemptionkeys.id = $scope.add_redemptionkeys._id;
			var update = gameBundle.update($scope.add_redemptionkeys, function() {
				$scope.edit($scope.add_redemptionkeys._id);
			});
		};

		// prepare to add update
		$scope.add = function(id) {
			var add_redemptionkeys = gameBundle.get({ id: id }, function() {
				$scope.add_redemptionkeys = add_redemptionkeys;
			});
		}; 

		// initialize gamebundle controller and services
		$scope.initialize = function(){
			$scope.readall();
			$scope.formData = new gameBundle();
		};

		$scope.initialize();
	};
})();