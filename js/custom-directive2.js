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

