var app = angular.module('clickApp', []);

app.controller('ClickController', ['$scope', function($scope) {
	$scope.vm = this;
	this.message = 'Hellooo!';
	$scope.fruits = ['Apples', 'Bananas', 'Limes'];
	$scope.addFruit = function() {
		$scope.fruits.push('Boysenberry');
	};
	
	this.doAlert = function() {
		alert(this.message);
	};
}]);

