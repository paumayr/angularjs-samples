var app = angular.module('formcontrolsApp', []);

app.controller('formcontrolsController', ['$scope', function($scope) {
	
	$scope.countries = [
		{ code: 'AT', display: 'Austria'},
		{ code: 'DE', display: 'Germany'},
		{ code: 'US', display: 'United States of America'},
		{ code: 'FR', display: 'France'}	
	];
}]);