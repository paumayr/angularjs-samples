describe('SampleController Suite', function () {
	beforeEach(module('app'));
	
	var $controller;
	
	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));
	
	it('should start with a random number', function() {
	  var $scope = {};
      var controller = $controller('SampleController', { $scope: $scope });
      expect($scope.theNumber <= 100).toBe(true);
	  expect($scope.theNumber >= 0).toBe(true);
	});
	
	it('should support a check method that works', function() {
	  var $scope = {};
      var controller = $controller('SampleController', { $scope: $scope });
	  
	  $scope.theNumber = 50;
	  $scope.check(50);
      expect($scope.result).toBe('correct');
	  
	  $scope.theNumber = 50;
	  $scope.check(30);
      expect($scope.result).toBe('toolow');

	  $scope.theNumber = 50;
	  $scope.check(80);
      expect($scope.result).toBe('toohigh');
	});
});