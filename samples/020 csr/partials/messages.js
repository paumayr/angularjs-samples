var messages = angular.module('Messages', ['MessagesService']);

messages.controller('MessagesController', ['$scope', 'messages', function($scope, messages) {
	$scope.messages = messages;
}]);

messages.controller('MessageController', 
['$scope', '$routeParams', 'messages', 
function($scope, $routeParams, messages) {
	$scope.message = messages.filter(function(m) { return m.id == $routeParams.id; })[0];
	$scope.messageId = $routeParams.id;
}]);


