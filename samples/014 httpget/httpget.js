var app = angular.module('httpgetApp', []);

app.controller('httpgetController', ['$scope', '$http', function($scope, $http) {
	$scope.fruits = [];
	$scope.getFruits = function() {
		$http.get('fruits')
			.then(function(response) { 
				$scope.fruits = response.data; 
			},
			function(response) { /* error  case */ });	
	};
}]);

