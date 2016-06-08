angular.module('componentsApp', [])
.component('helloComponent', {
    template: '<span>Hello, it is: {{ $ctrl.now | date}}</span>',
    controller: ['$scope', function($scope) {
      this.now = new Date();
    }]
})