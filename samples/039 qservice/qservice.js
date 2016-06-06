angular.module('qServiceApp', [])
.controller('SampleController', ['$scope', '$http', '$q', function($scope, $http, $q) {
    $scope.itemDetails = [];
    $scope.fetchDetails = function() {
        // fetch list of items
        var itemsPromise = $http.get('/items');
        var itemDetailResponsesPromise = itemsPromise.then(function(response) {
            // continue when list of items is here
            var items = response.data;
            var itemDetailPromises = [];
            // fetch the details for every item -> put promise into list of requests
            items.forEach(function(item) {
              itemDetailPromise = $http.get('/items/' + item);
              itemDetailPromises.push(itemDetailPromise);  
            });
            
            // return a single promise that completes when all promises for all 
            // detail responses have completed
            return $q.all(itemDetailPromises);
        });
        
        itemDetailsPromise = itemDetailResponsesPromise.then(function(responses) {
            // responses is a list of  http response objects, .data holds the response data
            return responses.map(function(r) { return r.data; });
        });
        
        itemDetailsPromise.then(function(details) {
           // assign the details result to the scope variable -> ng-repeat in view will render the result
           $scope.itemDetails = details; 
        });
    };
}]);
