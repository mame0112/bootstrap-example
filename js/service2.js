app.service('myService2', function(){
	return {
		sublNumber:function (x, y)
		{
			console.log("sublNumber");
			var result = x - y;
			console.log("result: " + result);
			return result;
		},
	};
});