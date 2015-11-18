var app = angular.module('numbergameApp', []);
app.controller('numbergameController', 
['$scope', '$http', '$interval', 
function($scope, $http, $interval) {
	$scope.stopTimer = function() {
		if ($scope.gameTimer) {
			$interval.cancel($scope.gameTimer);
			$scope.gameTimer = null;
		}
	};
	
	$scope.startTimer = function() {
		$scope.start = new Date().getTime();
		$scope.elapsed = 0;			
		$scope.gameTimer = $interval(function() {
			$scope.elapsed = (new Date().getTime()) - $scope.start;
		}, 30);
	};
	
	$scope.init = function() {
		$scope.stopTimer();
		$scope.currentGuess = null;
		$scope.result = null;
		$scope.guessCount = 0;
		$scope.gameId = -1;
		$scope.elapsed = 0;
		
		$http.post('/newgame')
		.then(function(response) {
			$scope.gameId = response.data.id;
			$scope.guessCount = response.data.guessCount;
			$scope.startTimer();
		},
		function(response) {
			/* error */
		});
	};
	$scope.init();
	
	$scope.isChecking = false;
	$scope.check = function() {
		if (true)/* $scope.currentGuess != null && $scope.currentGuess != undefined) */
		{
			$scope.isChecking = true;
			$http.get('/try/' + $scope.gameId + '/' + $scope.currentGuess)
			.then(function(response) {
				$scope.isChecking = false;
				$scope.currentGuess = null;
				$scope.guessCount = response.data.guessCount;
				$scope.result = response.data.result;
				if ($scope.result == 'correct') {
					$scope.theNumber = response.data.theNumber;
					$scope.stopTimer();
				}
			},
			function() {
				/* error */
				$scope.isChecking = false;
			});
		}
	}
}]);




