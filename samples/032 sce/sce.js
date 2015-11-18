angular.module('sceApp', [])
.controller('sceController', ['$scope', '$sce', function($scope, $sce) {
	
	$scope.$watch('userHTML', function(newValue) {
		$scope.safeUserHTML = $sce.trustAsHtml(newValue);
	});
}]);