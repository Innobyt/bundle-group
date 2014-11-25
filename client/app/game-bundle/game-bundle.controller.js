(function() {
	'use strict';

	angular.module('gamebundleApp')
	  .controller('GameBundleCtrl', ['$scope', 'gameBundle', GameBundleCtrl]);

	function GameBundleCtrl($scope, gameBundle) {
	    $scope.submit = function() { 
        $scope.formData.$save(function(){ $scope.initialize(); }); 
      };
		$scope.initialize = function(){ $scope.formData = new gameBundle(); };
		$scope.initialize();
	};
})();