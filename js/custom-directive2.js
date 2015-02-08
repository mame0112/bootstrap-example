app.directive('customDirective', function(){
	return {
		restrict: 'A',
		link: function(){
			console.log("This is test from custom directive");
			alert("This is test from custom directive");
		}
	};
});

