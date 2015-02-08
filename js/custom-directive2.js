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
	return function(scope, element){
		element.bind("mouseenter", function(){
			console.log("mouse in");
			element.addClass("panel");
		});
	};
});

app.directive('leave', function(){
	return function(scope, element){
		element.bind("mouseleave", function(){
			console.log("mouse leave");
			element.removeClass("panel");
		});
	};
});