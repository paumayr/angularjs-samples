describe('GameController', function() {
	beforeEach(module('game'));
	
	var $controller;
	
	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));
	
	it('should have a random Number', function() {
		var $scope = {};
		var gameController = $controller('GameController', { $scope : $scope });
		
		expect($scope.theNumber >= 0).toBe(true);
		expect($scope.theNumber <= 100).toBe(true);
	});
});