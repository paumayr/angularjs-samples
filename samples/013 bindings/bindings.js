var app = angular.module('bindingsApp', []);

app.controller('bindingsController', ['$scope', function($scope) {
	$scope.currentUser = 'Homer Simpson';
	$scope.newMessage = '';
	$scope.sendMessage = function() {
		alert('sending Message ' + $scope.newMessage);
	};
}]);

app.directive('testBindings', function() {
	return {
		template: '<div>Hello, {{userName}}: '+
		'<input type="text" ng-model="message" />' +
		'<button class="btn btn-primary" ng-click="onSend()">Send</button>' + 
		'</div>',
		scope: {
			userName: '@',
			message: '=',
			onSend: '&'
		}
	}
});
