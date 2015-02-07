var app = angular.module('myApp', [])
.controller('Controller', ['$scope', function($scope){
	console.log("AAAA");
	$scope.message =  'Test message from controller';
}])

.directive('myDirectiveA', function(){
	return {
		templateUrl: 'my-directive-a.html'
	};
})

.directive('myDirectiveE', function(){
	return {
		restrict: 'E',
		templateUrl: 'my-directive-e.html'
	};
})

.directive('myDirectiveC', function(){
	return {
		restrict: 'C',
		templateUrl: 'my-directive-c.html'
	};
});