var app = angular.module('modelApp', []);
app.controller('ModelController', ['$scope', function($scope){
	$scope.fruits = ['Apples', 'Bananas', 'Limes'];
	$scope.addFruit = function(fruit) {
		$scope.fruits.push(fruit);	
	};
	$scope.removeFruit = function(index) {
		$scope.fruits.splice(index, 1);	
	};
}]);

