var _ = require("underscore");
var curry2 = require('../curry').curry2;

function pipeline(seed /*, args*/) {
	return _.reduce(_.rest(arguments),
					function(l, r) { return r(l);},
					seed);
}

pipeline([2, 3, null, 1, 42, false],
	_.compact,
	_.initial,
	_.rest
	,function(n) {
		console.log(n);		
	});
