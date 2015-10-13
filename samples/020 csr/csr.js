var app = angular.module('csrApp', ['ngRoute', 'Home', 'Profile', 'Messages']);

app.controller('MainController', ['$scope', '$route', function($scope, $route) {
    $scope.$route = $route;  
}]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/Home', { templateUrl: 'partials/home.html', controller: 'HomeController', activeTab: 'Home' }).
      when('/Profile', { templateUrl: 'partials/profile.html',  controller: 'ProfileController', activeTab: 'Profile' }).
      when('/Messages/:id', { templateUrl: 'partials/message.html',  controller: 'MessageController', activeTab: 'Messages' }).
      when('/Messages', { templateUrl: 'partials/messages.html',  controller: 'MessagesController', activeTab: 'Messages'}).
      otherwise( { redirectTo: "/Home" });
}]);