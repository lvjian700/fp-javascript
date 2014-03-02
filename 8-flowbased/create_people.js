function createPerson() {
	var firstName = "";
	var lastName = '';
	var age = 0;
	
	return {
		setFirstName: function(fn) {
			firstName = fn;
			return this;
		},
		setLastName: function(ln) {
			lastName = ln;
			return this;
		},
		setAge: function(a) {
			age = a;
			return this;
		},
		toString: function() {
			return [firstName, lastName, age].join(' ');
		}
	}
}

var ret = createPerson()
			.setFirstName('lv')
			.setLastName('jian')
			.setAge(108)
			.toString();
console.log(ret);