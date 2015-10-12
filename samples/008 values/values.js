var myApp = angular.module('ValuesApp', ['constants']);

myApp.controller('ValuesController', 
['$scope', 'SpeedOfSound', 'ConnectionString', 
function($scope, SpeedOfSound, ConnectionString) {
	$scope.connectionString = ConnectionString;
	$scope.getDuration = function() {
		return $scope.distance * 1000.0 / SpeedOfSound;	
	}; 
}]);

