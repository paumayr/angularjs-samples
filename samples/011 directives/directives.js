var app = angular.module('directivesApp', []);
app.directive('myCustomDirective', function() {
	return {
		template: '<div class="alert alert-success">Hello World, from Directive</div>'
	};
})
