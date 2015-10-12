var app = angular.module('fruitApp', []);
app.controller('FruitsController', ['$scope', function($scope){
	$scope.fruits = ['Apples', 'Bananas', 'Limes'];
	$scope.addFruit = function(fruit) {
		$scope.fruits.push(fruit);	
	};
	$scope.removeFruit = function(index) {
		$scope.fruits.splice(index, 1);	
	};
}]);

