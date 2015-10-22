var app = angular.module('app', []);

app.directive('clickWobble', ['$timeout', function($timeout) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs, controller, transcludeFn) {
			element.on('click', function() {
				element.addClass('animated wobble');
				$timeout(function() {
					element.removeClass('animated wobble');
				}, 1000);
			});
		}
	};
}]);