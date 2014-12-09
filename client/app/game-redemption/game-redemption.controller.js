(function() {
	'use strict';

	angular.module('gamebundleApp')
	  .controller('GameRedemptionCtrl', ['$scope', 'gameRedemption', GameRedemptionCtrl]); 
	  
	  // GameRedemptionCtrl requires R output, 
	  // 'R' as in retrieve
	  function GameRedemptionCtrl($scope, gameRedemption) {
	    
		// get, all gameBundle ('R' in Crud)
		$scope.readall = function(){
			var gameredemption = gameRedemption.query(function() {
				$scope.gameredemption = gameredemption;
			});
		};	
		 
		// post, gameRedemption creation ('C' in Crud)
		$scope.submit = function() {
			$scope.formData.$save(function(){ $scope.initialize(); });
		 };

		// initialize gameRedemption controller and services
		$scope.initialize = function(){
			$scope.readall();
			$scope.formData = new gameRedemption();
		};

		$scope.initialize();
	};
})();
