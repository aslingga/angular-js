/**
 * 
 */

app.controller("ctrl1", function($scope) {
	$scope.name = "Angga Sanjaya";
});

app.controller("ctrl2", function($scope) {
    $scope.firstName = "Angga";
    $scope.lastName = "Lingga";
});

app.directive("myDirective", function() {
	return {
		restrict: 'C',
		template: 'My name is Angga Sanjaya Lingga'
	}
});