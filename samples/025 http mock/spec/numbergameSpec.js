describe('SampleController Suite', function () {
	var $httpBackend, $rootScope, createController;

   // Set up the module
   beforeEach(module('app'));

   beforeEach(inject(function($injector) {
     // Set up the mock http service responses
     $httpBackend = $injector.get('$httpBackend');
     // backend definition common for all tests
     $httpBackend.when('POST', '/newgame')
                            .respond({ id: 2, guessCount: 0});
                            
      var tryUri = /\/try\/(.+)\/(.+)/;     
     $httpBackend.when('GET', tryUri, undefined, undefined)
      .respond(function(method, url, data, headers, params) {
        var match = url.match(tryUri);
        var id = parseInt(match[1]);
        var guess = parseInt(match[2]);

        var result = 'correct';
        if (guess > 50) {
          result = 'toohigh';
        } else if (guess < 50) {
          result = 'toolow';
        }
        return [200, { result: result, guessCount: 3 }];
      })
      
      

     // Get hold of a scope (i.e. the root scope)
     $rootScope = $injector.get('$rootScope');
     // The $controller service is used to create instances of controllers
     var $controller = $injector.get('$controller');

     createController = function() {
       return $controller('NumberGameController', {'$scope' : $rootScope });
     };
   }));

   afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });


   it('should call newgame on init', function() {
     $httpBackend.expectPOST('/newgame');
     var controller = createController();
     $httpBackend.flush();
     expect($rootScope.gameId).toBe(2);
  	 expect($rootScope.guessCount).toBe(0);
   });
   
   it('should return an object with a valid result for try', function() {
     var controller = createController();
     $httpBackend.flush();
     
     //$httpBackend.expectGET(/\/try\/(.+)\/(.+)/);
     $rootScope.check(50);
     $httpBackend.flush();
     expect($rootScope.result).toBe('correct');
   });
	
});