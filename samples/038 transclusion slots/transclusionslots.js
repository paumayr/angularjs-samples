angular.module('transclusionSlotsApp', [])
.directive('myModal', function() {
    return {
      restrict: 'E',
      templateUrl: 'myModal.html',
      transclude: {
          header: 'myModalHeader',
          body: 'myModalBody'
      }
    };
});