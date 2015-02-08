app.controller('ParentController',
 ['$scope', 'Constants', 'myService', 'myService2',
  function($scope, Constants, myService, myService2){
	console.log("Parent");
	console.log("planetName: " + Constants.planetName);
	console.log("testMessage: " + Constants.testMessage);
	var mass = [1,2,3];
	var num = 1;

	// var myServiceInstance = myService;

	$scope.init = function()
	{
		console.log("init: " + num);
		// $scope.$broadcast('TEST', [1,2,3]);
		$scope.$emit('TEST', [1,2,3]);

		// $scope.result= $myService.addNumbers();
		// console.log("result: " + result);

	};

	$scope.parentCall = function()
	{
		console.log("parentCall");
		$scope.$broadcast('TEST', [1,2,3]);
		num = num + 1;
		console.log(num);
		myService.addNumbers(1, 2);
		myService2.sublNumber(3, 2);
	};

}]);

// app.controller('parentController2', ['$scope', '$controller', function($scope, $controller){
// 	console.log("parentController2");
// 	$controller('ParentController', {$scope: $scope});
	// console.log("child: " + num);
// }]);

app.controller('ChildController', ['$scope', 'myService', function($scope, myService){

	$scope.$on('TEST', function(event, mass){
		console.log("broadcasted");
		console.log(mass);
		myService.addNumbers(3, 4);
	});
}]);
