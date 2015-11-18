var app = angular.module('game', []);

app.controller('GameController', 
['$scope', function($scope) {
	$scope.theNumber = Math.round(Math.random() * 100);
}]);