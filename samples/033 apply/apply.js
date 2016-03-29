angular.module('applyApp', [])
.controller('applyController', [ '$scope', function($scope) {
    $scope.items = [{ text: "Item 0"}, { text: "Item 1"}, { text: "Item 2"}];
    $scope.add = function() {
      $scope.items.push({ text: "Item " + this.items.length });  
    };
}])
.directive('myButtonNonApply', [function() {
   return {
       restrict: 'A',
       link: function(scope, element, attrs, controller, transcludeFn) {
			element.on('click', function() {
                scope.add();
			});
		}
   } 
}])
.directive('myButtonApply', [function() {
   return {
       restrict: 'A',
       link: function(scope, element, attrs, controller, transcludeFn) {
			element.on('click', function() {
                scope.$apply(function() {
                    scope.add();
                });
			});
		}
   } 
}]);