(function() {
	'use strict';

	angular.module('gameRedemptionApp', ['ngTable', 'ngTableExport'])
	  .controller('GameRedemptionCtrl', ['$scope', $filter, ngTableParams, 'gameRedemption', RetrieveCtrl]); 
	  
	  // GameRedemptionCtrl requires R output, 
	  // 'R' as in retrieve
	  function GameRedemptionCtrl($scope, gameRedemption) {
	    
		// get, all gameBundle ('R' in Crud)
		$scope.readall = function(){
			var gameredemption = gameRedemption.query(function() {
				$scope.gameredemption = gameredemption;
			});
		};	
		
		// Ng-Table to display User's Claimed Redemption Keys, the data consists of username, email, bundlename, gamename, redemptionkey, timestamp (see below under filter for each of the description)
		/*var data = $scope.readall();	
			
			 $scope.tableParams = new ngTableParams({
	         page: 1,            // show first page
	         count: 10,          // count per page
	         filter: {
	             username: 'JohnDoe'       // initial filter for username
				 email: '' //  User's email
				 bundlename: '' //  Display the specified bundlename
				 gamename: '' // Array of the game title names tagged with bundlename
				 redemptionkey: '' // Claimed Redemption Key that User has claimed
				 timestamp: '' // Claimed Date & Time
	         }
	     }, {
	         total: data.length, // length of data
	         getData: function($defer, params) {
	             // use build-in angular filter
	             var orderedData = params.filter() ?
	                    $filter('filter')(data, params.filter()) :
	                    data;

	             $scope.gameredemption = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

	             params.total(orderedData.length); // set total for recalc pagination
	             $defer.resolve($scope.gameredemption);
	         }
	     });*/
		 
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
