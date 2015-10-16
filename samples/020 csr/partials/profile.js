var profile = angular.module('Profile', []);

profile.controller('ProfileController', ['$scope', function($scope) {
	$scope.$on('$destroy', function(arg) {
		alert('leaving profile');
	});
}]);