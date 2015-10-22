var dataModule = angular.module('data', []);

dataModule.service('DataService', function () {
	var that = this;
	this.fruits = ['Apples', 'Bananas', 'Limes'];
	 
	this.getFruits = () => {
		return that.fruits;
	};
	
	this.addFruit = function(newFruit) {
		that.fruits.push(newFruit);	
	};
});

