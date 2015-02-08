app.service('myService', ['$rootScope', function($rootScope){
	return {
		addNumbers:function ()
		{
			console.log("addNumbers");
			return 0;
		},
	};
}]);