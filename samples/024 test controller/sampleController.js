var app = angular.module('app', []);

app.controller('SampleController', ['$scope', function($scope) {
	$scope.theNumber = Math.round(Math.random() * 100);
	$scope.result = null;
	$scope.check = function(guess) {
		if (guess > $scope.theNumber) {
			$scope.result = 'toohigh';
		} else if (guess < $scope.theNumber) {
			$scope.result = 'toolow';
		} else {
			$scope.result = 'correct';
		}
	};
	
}]);