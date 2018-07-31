angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://batur.dev/employees/angga.sanjaya@lkpp.go.id',
	    	{params: {'access-token': 'nfwm9EFvq5tws3aSWO4d-2hr7CQS7ZZNQilnY8INX'}, headers: {'Accept': 'application/json'}}
	    ).
        then(function(response) {
            $scope.greeting = response.data;
        });
});