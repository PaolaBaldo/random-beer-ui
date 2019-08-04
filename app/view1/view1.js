'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])


.controller('View1Ctrl', function($scope, $http) {

	$scope.performCall = function(){
    // Simple GET request example:
    $http({
      method: 'GET',
      url: 'http://localhost:8080/beers/random'
    }).then(function successCallback(response) {
    	$scope.greeting = response.data;
       // this callback will be called asynchronously
       // when the response is available
    }, function errorCallback(response) {
       // called asynchronously if an error occurs
       // or server returns response with an error status.
    });
	}

});