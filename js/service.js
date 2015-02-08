app.service('myService', ['$rootScope', function($rootScope){
	return {
		addNumbers:function (x, y)
		{
			console.log("addNumbers");
			var result = x + y;
			console.log("result: " + result);
			return result;
		},
	};
}]);