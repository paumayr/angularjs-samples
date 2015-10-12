var app = angular.module('numbergameApp', []);
app.controller('numbergameController', ['$scope', function($scope) {
	
	$scope.theNumber = Math.round(Math.random() * 100);
	$scope.currentGuess = null;
	$scope.result = null;
	$scope.guessCount = 0;
	
	$scope.check = function() {
		if ($scope.currentGuess > $scope.theNumber) {
			$scope.result = 'toohigh';
		} else if ($scope.currentGuess < $scope.theNumber) {
			$scope.result = 'toolow';
		} else if ($scope.currentGuess == $scope.theNumber) {
			$scope.result = 'correct';
		}
		
		$scope.currentGuess = null;
		$scope.guessCount++;
	}
}]);

