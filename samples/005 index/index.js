var app = angular.module('indexApp', []);

app.controller('IndexController', ['$scope', function($scope) {
	$scope.fruits = ['Apples', 'Bananas', 'Limes'];
	$scope.addFruit = function() {
		$scope.fruits.push('Boysenberry');	
	};
	$scope.removeFruit = function(index) {
		$scope.fruits.splice(index, 1);	
	};
}]);

