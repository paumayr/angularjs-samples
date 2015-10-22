var app = angular.module('filterApp', []);

app.controller('filterController', ['$scope', '$log', function($scope, $log) {
	$scope.myNumber = Math.PI;
	$scope.people = [
		{ name: 'Homer' },
		{ name: 'March' },
		{ name: 'Bart' },
		{ name: 'Lisa' },
		{ name: 'Maggie' },
		{ name: 'Blinky' },
		{ name: 'Duffman' },
		{ name: 'Ned Flanders' },
		{ name: 'Maude Flanders' },
		{ name: 'Rod Flanders' }
	];
	
	$scope.$watch('searchName', function(newValue, oldValue) {
		$log.info('newValue:' + newValue + ' oldValue: ' + oldValue);
	});
}]);

app.filter('orderByLength', function() {
	return function(arr) {
		arr.sort(function(lh, rh) {
			return lh.name.length - rh.name.length; 
		});
		return arr;
	};
});