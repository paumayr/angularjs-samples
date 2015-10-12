var app = angular.module('ngifApp', []);

app.controller('ngifController', ['$scope', '$log', function($scope, $log) {
	$scope.theValue = false;
	$scope.toggleValue = function() {
		$log.info('toggling value');
		$scope.theValue = !$scope.theValue;
	};
}]);

app.controller('nestedController', ['$scope', '$log', function($scope, $log) {
	$log.info('initializing nestedController');
	$scope.fruits = ['Apple', 'Banana', 'Lime', 'Boysenberry'];
}]);

