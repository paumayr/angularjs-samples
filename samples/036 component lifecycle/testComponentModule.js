angular.module('testComponentModule', [])
.component('testComponent', {
   templateUrl: 'testComponent.html',
   controller: [function($scope) {
       this.$onInit = function() {
           console.log('on Init');
       };
       
       this.$onChanges = function(changes) {
           console.log('on Changes:', changes);  
       };
       
       this.$onDestroy = function() {
           console.log('on Destroy');
       };
       
       this.$postLink = function() {  
           console.log('on postLink');
       };
   }],
   bindings: {
       someParameter: '<'
   }
});
