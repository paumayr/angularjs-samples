var app = angular.module('clickApp', []);

app.controller('ClickController', ['$scope', function($scope) {
	$scope.fruits = ['Apples', 'Bananas', 'Limes'];
	$scope.addFruit = function() {
		$scope.fruits.push('Boysenberry');
	};
}]);

