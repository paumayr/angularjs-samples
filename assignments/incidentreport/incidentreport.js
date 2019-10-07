var app = angular.module('incidentReportApp', []);

app.controller('incidentReportCtrl', ['$scope', function($scope) {

    $scope.data = {
        name: '',
        title: '',
        descripion: '',
        severity: 'low'
    };
}]);
