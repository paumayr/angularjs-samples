var app = angular.module('filterApp', []);

app.controller('filterController', ['$scope', function($scope) {
	$scope.myNumber = Math.PI;
	$scope.people = [
		{ first: 'Homer' },
		{ first: 'March' },
		{ first: 'Bart' },
		{ first: 'Lisa' },
		{ first: 'Maggie' }
	];
}]);

app.filter('orderByLength', function() {
	return function(arr) {
		arr.sort(function(lh, rh) {
			return lh.first.length - rh.first.length; 
		});
		return arr;
	};
});