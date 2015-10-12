var dataModule = angular.module('data', []);

function DataService() {
	var that = this;
	this.fruits = ['Apples', 'Bananas', 'Limes'];
	 
	this.getFruits = function() {
		return that.fruits;
	};
	
	this.addFruit = function(newFruit) {
		that.fruits.push(newFruit);	
	};
}

dataModule.factory('DataService', function() {
	return new DataService(); 
});

