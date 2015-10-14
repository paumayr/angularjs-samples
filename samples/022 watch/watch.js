var app = angular.module('watchApp', []);

app.controller('watchController', ['$scope', '$log', function($scope, $log) {
	$scope.$watch('message', function(newValue, oldValue) {
		$log.info('newValue: ' + newValue + ' oldValue:' + oldValue);
	});
}]);

