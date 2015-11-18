describe('mytestsuite', function() {
	beforeEach(module('app'));
	
	var $scope = null;
	
	beforeEach(inject(function(_$controller_) {
		$controller = _$controller_;
	}));
	
	it('should be true', function() {
		var $scope = {};
		var controller = $controller('SampleController', { $scope: $scope });
		expect($scope.theNumber <= 100).toBe(true);
		expect($scope.theNumber >= 0).toBe(true);
	});
})