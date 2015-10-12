var app = angular.module('serviceApp', ['data']);

app.controller('ServiceController', ['$scope', 'DataService', function($scope, DataService) {
	$scope.fruits = DataService.getFruits();
	
	$scope.addFruit = function(newFruit) {
		DataService.addFruit(newFruit);
	};
}]);
