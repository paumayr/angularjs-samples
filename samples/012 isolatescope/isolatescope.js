var app = angular.module('isolateScopeApp', []);
app.directive('myCustomDirective', function() {
	return {
		template: '<div class="alert alert-success">Hello {{ greetingName }}, from Directive</div>',
		scope: {
			greetingName: '=greetingName'
		}
	};
})
