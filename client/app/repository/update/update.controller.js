(function() {
	'use strict';

	angular.module('gamebundleApp')
	  .controller('UpdateCtrl', UpdateCtrl);
	
	UpdateCtrl.$inject=['$scope', '$stateParams', 'repository'];

	// CreateCtrl requires 1 actions of CRUD, C as in create
	function UpdateCtrl($scope, $stateParams, repository) {
		//get /:bundlename from url and populate to $scope.bundlename
		$scope.formData = {};

		$scope.id = $stateParams.id;

		repository.view({
			id: $stateParams.id
		}).$promise.then(function(response) {
			$scope.formData.bundlename = response.bundlename;
			$scope.formData.gamelist = response.gamelist;
			$scope.formData.merchant = response.merchant;
		});


		// initialize repository controller and services
//		$scope.initialize = function() {
//			$scope.formData = new repository();
//		};

		// put, repository update ('U' in Crud)
		$scope.submit = function() {
			//pass in bundlename into formData
//			$scope.formData.bundlename = $scope.bundlename;
//			$scope.formData.gamelist = $scope.gamelist;
//			$scope.formData.merchant = $scope.merchant;
//			console.log($scope.formData);
			repository.update({
				id: $scope.id
			},$scope.formData);
			console.log($scope.formData);
		};

//		$scope.initialize();
	}
})();

