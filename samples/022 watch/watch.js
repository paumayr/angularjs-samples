var app = angular.module('watchApp', []);

app.controller('watchController', 
['$scope', '$log', 
function($scope, $log) {
	$scope.$watch('message + message2', function(newValue, oldValue) {
		$log.info('newValue: ' + newValue + ' oldValue:' + oldValue);
		$scope.message += 'haha';
	});
}]);

