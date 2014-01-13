function varirablespace () {
	var x = 'a';
	function innerFun () {
		var x = 1;
		console.log(x);
	}

	innerFun();
	console.log(x);

	if(x == 'a') {
		var y = 'b';
	}

	console.log(y);
}

varirablespace();
