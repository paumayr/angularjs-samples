describe('mytestsuite', function() {
	beforeEach(module('app'));
	
	var $scope = null;
	
	beforeEach(inject(function(_$controller_) {
		$controller = _$controller_;
	}));
	
	it('should be true', function() {
		var $scope = {};
		var realRandom = Math.random;
		try {
			Math.random = function() { return 0.4; }
			var controller = $controller('SampleController', { $scope: $scope });
			expect($scope.theNumber == 40).toBe(true);
		} finally {
			Math.random = realRandom;
		}
	});
})