function lv() {
	this.name = 'lv';
};

function xf() {
	this.name = 'xuefeng';
};


function i_say() {
	console.log(this.name);
}

name="haha";

i_say();
i_say.apply(lv);
i_say.apply(xf);
