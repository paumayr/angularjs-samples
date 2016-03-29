angular.module('userListComponentModule', [])
.component('userListComponent', {
    templateUrl: 'userListComponent.html',
    controller: ['$scope', function() {
       // logic for the component
    }],
    bindings: {
        persons: '<',
        onPersonSelected: '&'
    }
});

