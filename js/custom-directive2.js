app.directive('customDirective', function(){
	return {
		restrict: 'A',
		link: function (scope, element){
			element.bind("mouseenter", function(){
			console.log("Mouse in");
		});
		}
	};
});

app.directive('enter', function(){
	return function(scope, element, attrs){
		element.bind("mouseenter", function(){
			console.log("mouse in");
			scope.$apply(attrs.enter);
			// element.addClass(attrs.enter);
		});
	};
});

app.directive('leave', function(){
	return function(scope, element, attrs){
		element.bind("mouseleave", function(){
			console.log("mouse leave");
			// element.removeClass(attrs.enter);
		});
	};
});

app.controller('DirectiveController', ['$scope', function($scope){
	$scope.alertTest = function()
	{
		console.log("alertTest");
		// alert("Test message from Controller");
	};
}]);


app.directive('test1', function(){
	return {
		controller: function($scope)
		{
			$scope.test_array = [];
			this.addHoge = function ()
			{
				console.log("addHoge");
				$scope.test_array.push("Hoge");
			};
			this.addFuga = function ()
			{
				$scope.test_array.push("Fuga");
			};
		},
		link: function(scope, element)
		{
			element.bind("mouseenter", function(){
				console.log("mouse enter");
				console.log(scope.test_array);
			});
		}
	};
});

app.directive('test2', function(){
	return {
		require: 'test1',
		link: function(scope, element, attrs, test1Ctrl)
		{
			test1Ctrl.addHoge();
		}
	};

});