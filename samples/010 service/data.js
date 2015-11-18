angular.module('data', [])
.service('DataService', function () {
	var that = this;
	this.fruits = ['Apples', 'Bananas', 'Limes'];
	 
	this.getFruits = function() {
		return that.fruits;
	};
	
	this.addFruit = function(newFruit) {
		that.fruits.push(newFruit);	
	};
});

