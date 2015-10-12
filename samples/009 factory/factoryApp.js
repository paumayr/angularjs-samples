var app = angular.module('factoryApp', ['data']);

app.controller('FactoryController', ['$scope', 'DataService', function($scope, DataService) {
	$scope.fruits = DataService.getFruits();
	
	$scope.addFruit = function(newFruit) {
		DataService.addFruit(newFruit);
	};
}]);
