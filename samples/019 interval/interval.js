var app = angular.module('intervalApp', []);

app.controller('intervalController', ['$scope', '$interval', 
function($scope, $interval) {
	$scope.start = function() {
		$scope.startTime = new Date().getTime();
		$scope.timer = $interval(function() {
			$scope.elapsed = (new Date().getTime()) - $scope.startTime;
		})
	};
	
	$scope.stop = function() {
		if ($scope.timer) {
			$interval.cancel($scope.timer);
			$scope.timer = null;
		}
	};
	
	$scope.reset = function() {
		if ($scope.timer) {
			$interval.cancel($scope.timer);
			$scope.timer = null;
		};
		
		$scope.startTime = null;
		$scope.elapsed = null;
	};
}])