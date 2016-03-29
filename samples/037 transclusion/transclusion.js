angular.module('transclusionApp', [])
.controller('transclusionController', ['$scope', function($scope) {
    
}])
.directive('myModal', function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        templateUrl: 'myModal.html'  
    };
});