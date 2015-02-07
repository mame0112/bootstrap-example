app.controller('ParentController', ['$scope', function($scope){
	console.log("Parent");
	var mass = [1,2,3];
	var num = 1;

	$scope.init = function()
	{
		console.log("init: " + num);
		// $scope.$broadcast('TEST', [1,2,3]);
		$scope.$emit('TEST', [1,2,3]);
	};

	$scope.parentCall = function()
	{
		console.log("parentCall");
		$scope.$broadcast('TEST', [1,2,3]);
		num = num + 1;
		console.log(num);
	};

}]);

// app.controller('parentController2', ['$scope', '$controller', function($scope, $controller){
// 	console.log("parentController2");
// 	$controller('ParentController', {$scope: $scope});
	// console.log("child: " + num);
// }]);

app.controller('ChildController', ['$scope', function($scope){

	$scope.$on('TEST', function(event, mass){
		console.log("broadcasted");
		console.log(mass);
	});
}]);
