var app = angular.module('eventsApp', []);

app.controller('eventsController', ['$scope', '$rootScope' function($scope, $rootScope) {
	$scope.broadcastMessage = function() {
		$scope.$broadcast('downevent', { message: 'It is ' + new Date() });	
	};
    
    $rootScope.$broadcast('languagechange', { language: 'en-us'});
	
	$scope.currentMessage = "No Message from nested";
	$scope.$on('upevent', function(e, args) {
		$scope.currentMessage = args.message;
	});
}]);

app.controller('nestedController', ['$scope', function($scope) {
	$scope.currentMessage = 'No message set';
	$scope.$on('downevent', function(event, data) {
		$scope.currentMessage = data.message;
	});
	
	$scope.emitMessage = function() {
		$scope.$emit('upevent', { message: $scope.message });
	};
}]);

