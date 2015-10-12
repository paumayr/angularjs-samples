var app = angular.module('repeatApp', []);

app.controller('RepeatController', ['$scope', function($scope) {
	$scope.fruits = ['Apples', 'Bananas', 'Limes'];
}]);

