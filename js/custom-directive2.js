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
			element.addClass(attrs.enter);
		});
	};
});

app.directive('leave', function(){
	return function(scope, element, attrs){
		element.bind("mouseleave", function(){
			console.log("mouse leave");
			element.removeClass(attrs.enter);
		});
	};
});