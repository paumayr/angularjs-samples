angular.module('componentBindings', ['userListComponentModule'])
.controller('appController', ['$scope', function($scope) {
    $scope.characters = [
      { first: 'Homer', last: 'Simpsons' },
      { first: 'March', last: 'Simpsons' },
      { first: 'Maggie', last: 'Simpsons' }
    ];
    
    $scope.onSelectCharacter = function(character) {
      alert(JSON.stringify(character));  
    };
}])