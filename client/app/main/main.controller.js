'use strict';

angular.module('gamebundleApp')
  .controller('MainCtrl', ['$scope', 'mainservice', MainCtrl]); 

	function MainCtrl($scope, mainservice) {
		
		$scope.initialize = function(){
			$scope.formData = new mainservice();
		};

		$scope.submit = function() {
			$scope.formData.$save(function(){ 
				$scope.initialize(); 
			});
		};
		
		$scope.initialize();
	};
