var app = angular.module('bindingsApp', []);

app.controller('bindingsController', ['$scope', function($scope) {
	$scope.currentUser = 'Homer Simpson';
	$scope.newMessage = '';
	$scope.sendMessage = function() {
		alert('sending Message ' + $scope.newMessage);
	};
	
	$scope.alertUser = function() {
		alert('send!');
	};
}]);

app.controller('testBindingsController', ['$scope',
	function($scope) {
		$scope.doLogMessage = function() {
			console.log("username: " + $scope.username);
			$scope.onSend();	
		};	
}]);

app.directive('testBindings', function() {
	return {
		templateUrl: 'testBindings.html',
		scope: {
			userName: '@',
			message: '=',
			onSend: '&'
		},
		controller: 'testBindingsController'
	}
});
