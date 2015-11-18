var game = angular.module('game', []);

game.service('RNDGen', function() {
	this.rnd = Math.random;
});

game.controller('GameController', ['$scope', 'RNDGen', function($scope, RNDGen) {
	$scope.theNumber = Math.round(RNDGen.rnd() * 100);
}]);