var app = angular.module('watchApp', []);

app.controller('watchController', 
['$scope', '$log', 
function($scope, $log) {
	var watchFunc = function(newValue, oldValue) {
		$log.info('newValue: ' + newValue + ' oldValue:' + oldValue);
	};
	$scope.$watch('message', watchFunc);
}]);

