
var app = angular.module('app', []);

app.controller('SampleController', ['$scope', function($scope) {
	$scope.theNumber = Math.floor(Math.random() * 200);
	
}]);