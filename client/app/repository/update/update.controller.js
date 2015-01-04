(function() {
	'use strict';

	angular.module('gamebundleApp')
	  .controller('UpdateCtrl', UpdateCtrl);
	
	UpdateCtrl.$inject=['$scope', '$stateParams', 'repository'];

	// CreateCtrl requires 1 actions of CRUD, C as in create
	function UpdateCtrl($scope, $stateParams, repository) {
		//get /:bundlename from url and populate to $scope.bundlename		
		repository.view({ id: $stateParams.id }).$promise.then(function (response) {$scope.formData = response;});


		// initialize repository controller and services
		$scope.initialize = function(){
			$scope.formData = new repository();
		};

		// put, repository update ('U' in Crud)
		$scope.submit = function() {
			//pass in bundlename into formData
			$scope.formData.$update(function(){ $scope.initialize(); });
		};
		
//		$scope.filesChanged = function(elm){
//			var reader = new FileReader();
//			reader.onload = function(e){
//				$scope.formData.gamekeys = e.target.result;
//				$scope.$apply();
//			};
//			reader.readAsText(elm.files[0]);
//		};

		$scope.initialize();
	}
})();

