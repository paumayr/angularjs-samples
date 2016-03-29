angular.module('componentsApp', [])
.component('helloComponent', {
    template: '<span>Hello, it is: {{ $ctrl.now }}</span>',
    controller: ['$scope', function($scope) {
      this.now = new Date();
    }]
})