var messages = angular.module('Messages', []);

messages.value('messages', [
	{ 
		id: 1,
		title: 'Hello From Linz',
		body: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren'
	},
	{
		id: 2,
		title: 'Hello From Vienna',
		body: ' sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dol'
	},
	{
		id: 3,
		title: 'Hello From Graz',
		body: ' sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren'
	},
]);

messages.controller('MessagesController', ['$scope', 'messages', function($scope, messages) {
	$scope.messages = messages;
}]);

messages.controller('MessageController', ['$scope', '$routeParams', 'messages', function($scope, $routeParams, messages) {
	$scope.message = messages.filter(function(m) { return m.id == $routeParams.id; })[0];
	$scope.messageId = $routeParams.id;
}]);


