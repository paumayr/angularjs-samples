
var app = angular.module('app', []);

app.controller('NumberGameController', ['$scope', '$http', function($scope, $http) {
	$scope.init = function() {
		$scope.gameId = -1;
		$scope.result = null;
		$http.post('/newgame')
		.then(function(response) {
			$scope.gameId = response.data.id;
			$scope.guessCount = response.data.guessCount;		
		});
	};
	
	$scope.init();
	
	$scope.check = function(guess) {
		$http.get('/try/' + $scope.gameId + '/' + guess)
		.then(function(response) {
			$scope.result = response.data.result;
			// ...
		});
	};
}]);