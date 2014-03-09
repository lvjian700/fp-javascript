var _  = require('underscore');


var curry2 = function(func) {
	return function(secondArg) {
		return function(firstArg) {
			return func(firstArg, secondArg);
		}
	}
}

var curry3 = function(func) {
	return function(lastArg) {
		return function(middleArg) {
			return function(firstArg) {
				return func(firstArg, middleArg, lastArg);
			}
		}
	}
}

module.exports = {	
	curry2: curry2,
	curry3: curry3
}

