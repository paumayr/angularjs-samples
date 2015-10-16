var app = angular.module('directiveControllerApp', []);

app.controller('DirectiveController', ['$scope', function($scope) {
	$scope.messageFromController = 'This is from the Controller';	
}]);

app.directive('directiveWithController', function() {
	return {
		templateUrl: 'directiveWithController.html',
		scope: {},
		controller: 'DirectiveController',
		link: function(scope, element, attrs, controller, transclude) {
			element.attr('class', 'myclass');
		}
	}
});