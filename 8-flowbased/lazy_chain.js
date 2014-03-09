var _ = require('underscore');
var cat = require('../common').cat;

function existy(x) {
	return x != null;
}



function LazyChain (obj) {
	this._calls = [];
	this._target = obj;
}

LazyChain.prototype.invoke = function(methodName /*, args*/) {
	var args = _.rest(arguments);
	
	this._calls.push(function(target) {
		var m = target[methodName];
		
		return m.apply(target, args);
	});
	
	return this;
};

var caller = new LazyChain([2, 1, 3]) /* _calls=[], _target=[2,1,3]*/
	.invoke('sort') /* _calls=[Array.sort] */
	._calls;

console.log('lazy caller');
console.log(caller[0]([2,1,3]));

LazyChain.prototype.force = function() {
	return _.reduce(this._calls, function(target, thunk) {
		return thunk(target);
	}, this._target);
};

LazyChain.prototype.tap = function(fn) {
	this._calls.push(function(target) {
		fn(target);
		return target;
	});
	
	return this;
};

console.log('lazy sort..');
var deferredSort = new LazyChain([2, 1, 3])
.invoke('sort')
.tap(console.log);
console.log(deferredSort);

console.log('do sort');
deferredSort.force();


console.log('lazy chain chain chain...');
function LazyChainChainChain(obj) {
	var isLazyChain = (obj instanceof LazyChain);
	
	this._calls = isLazyChain ? cat(obj._calls, []) : [];
	this._target = isLazyChain ? obj._target : obj;
}

LazyChainChainChain.prototype = LazyChain.prototype;
new LazyChainChainChain(deferredSort)
.invoke('toString')
.force();










	