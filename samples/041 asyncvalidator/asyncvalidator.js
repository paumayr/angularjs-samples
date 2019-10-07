angular.module('asyncValidatorApp', [])
.directive('uniqueName', ['$http', function($http, $q) {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            ctrl.$asyncValidators.uniqueName = function(modelValue, viewValue) {
                return $http.get('https://api.predic8.de/shop/products/')
                    .then(function(response) {
                    if (response.data.products.some(function(p) { return p.name == viewValue; })) {
                        return $q.reject();
                    }

                    return true;
                });
            };
        }
    }
}])