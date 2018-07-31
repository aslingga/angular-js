/**
 * 
 */

app.controller("ctrl1", function($scope) {
	$scope.name = "Angga Sanjaya";
});

app.controller("ctrl2", function($scope) {
    $scope.firstName = "Angga";
    $scope.lastName = "Lingga";
	$scope.fullName = function() {
		return $scope.firstName + " " + $scope.lastName;
	};

	$scope.price = "50000";
});

app.directive("eluneDirective1", function() {
	return {
		restrict: "C",
		template: "My name is Angga Sanjaya Lingga"
	}
});

app.directive("eluneDirective2", function() {
	return {
		restrict: "E",
		template: "Hello my name is Angga Sanjaya Lingga"
	}
});

app.controller("ctrl3", function($scope) {
    $scope.names = [
        {name: "Angga Sanjaya", country: "Indonesia"},
        {name: "Zin Yui", country: "China"},
        {name: "Dominic Horton", country: "England"},
		{name: "Margareth", country: "Scotland"},
		{name: "Hege", country: "Norway"},
		{name: "Joe", country: "Denmark"},
		{name: "Gustav", country: "Sweden"},
		{name: "Birgit", country: "Denmark"},
		{name: "Mary", country: "Ireland"},
		{name: "Kai", country: "Norway"}
    ];

	$scope.peopleOrderBy = function(x) {
		$scope.peopleOrder = x;
	}
});

app.run(function($rootScope) {
	$rootScope.color = "Blue";
});

app.controller("ctrl4", function($scope) {
	$scope.color = "Red";
});

app.controller("ctrl5", function($scope, $http) {
	var url = "http://localhost/batur/web/v2/employee/profile/angga.sanjaya@lkpp.go.id";
	
	$http.get(url).then(function(response) {
		$scope.employeeNumber = response.data.data.employeeNumber;
	}, function errorCallback(response) {
	    console.log(response);
	})
	.catch(function activateError(error) {
        if (!error.handled) {
            alert("An error happened!");
        }
    });
});

app.controller("ctrl6", function($scope, $http) {
	var url = "http://localhost/batur/web/v2/notification/list?email=angga.sanjaya@lkpp.go.id";
	
	$http.get(url).then(function(response) {
		$scope.notifications = response.data.data;
	}, function errorCallback(response) {
	    console.log(response);
	})
	.catch(function activateError(error) {
        if (!error.handled) {
            alert("An error happened!");
        }
    });
});