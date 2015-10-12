var myApp = angular.module('myApp', []);

myApp.controller('MainPageController', 
['$scope', function($scope) {
	$scope.message = '42 is the answer!';
}]);

