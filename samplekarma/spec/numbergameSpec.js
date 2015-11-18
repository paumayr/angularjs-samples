describe('Numbergame', function() {
	beforeEach(module('game'));
	
	var $controller;
	
	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));
	
	it('should contain a random number...', function() {
		var $scope = {};
		var theRealRandom = Math.random;
		try {
			/*Math.random = function() {
				return 0.5;	
			};*/
			
			var numberGameController = $controller('GameController',
				 { $scope: $scope, 
				    RNDGen: {
						rnd: function() {
							return 0.5
						}
					}  
				 });
			
			expect($scope.theNumber > 0).toBe(true);
			expect($scope.theNumber <= 100).toBe(true);
			expect($scope.theNumber == 50).toBe(true);
		} finally {
			Math.random = theRealRandom;
		}
	});
});