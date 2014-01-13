function Say_myname() {
	this.name = "lv";

	function say_innername () {
		this.name = 'o?';
		this.say = function() {
			console.log(this.name);
		};
	}

	this.say = function() {
		console.log(this.name);
	};

	
}
