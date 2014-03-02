Function.prototype.method = function(name, func) {
	if(this.prototype[name]) {
		return this;
	}

	this.prototype[name] = func;
	return this;
};

String.method('trim', function () {
	return this.replace(/^\s+$/g, '');
});

console.log("  123  ".trim());
