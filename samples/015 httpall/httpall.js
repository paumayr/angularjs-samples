var app = angular.module('httpallApp', []);

app.controller('httpallController', ['$scope', '$http', function($scope, $http) {
	$scope.fruits = [];
	
	$scope.refresh = function() {
		$http.get('/015%20fruits')
			.then(function(response) {
				$scope.fruits = response.data;
			}, function(response) { /* error */ });
	};
	$scope.refresh();
	
	$scope.addFruit = function(newFruit) {
		var data = {
			fruit: newFruit
		};
		$http.post('/015%20fruits', data)
		.then(function(response) {
			$scope.refresh();
		}, function(response) { /* error */});
	};
	
	$scope.deleteFruit = function(index) {
		$http.delete('/015%20fruits/' + index)
		.then(function(response) {
			$scope.refresh();
		}, function(response) { /* error */ });
	};
}]);