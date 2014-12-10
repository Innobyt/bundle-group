(function() {
	'use strict';

	angular.module('gamebundleApp')
	  .controller('DashboardCtrl', ['$scope', '$filter', 'ngTableParams', 'gameRedemption', DashboardCtrl]); 
	
	// Ng-Table to display User's Claimed Redemption Keys, the data consists of username, email, bundlename, gamename, redemptionkey, timestamp (see below under filter for each of the description)    
	function DashboardCtrl($scope, $filter, ngTableParams, gameRedemption) {
		
		// get, all gameBundle ('R' in Crud)
		$scope.readall = function(){
			var gameredemption = gameRedemption.query(function() {
				$scope.gameredemption = gameredemption;

			    var data = gameredemption;

			    $scope.tableParams = new ngTableParams({
			        page: 1,            // show first page
			        count: 10,          // count per page
			        filter: {
			            'firstname': 'M'       // initial filter
			        }
			    }, {
			        total: data.length, // length of data
			        getData: function($defer, params) {
			            // use build-in angular filter
			            var orderedData = params.filter() ?
			                   $filter('filter')(data, params.filter()) :
			                   data;

			            $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

			            params.total(orderedData.length); // set total for recalc pagination
			            $defer.resolve($scope.users);
			        }
			    });

			});
		};

		// initialize gameRedemption controller and services
		$scope.initialize = function(){
			$scope.readall();
			$scope.formData = new gameRedemption();
		};

		$scope.initialize();

	};

})();