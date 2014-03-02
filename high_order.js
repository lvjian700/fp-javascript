function sum_integer (x) {
	if(x == 0) {
		return 0;
	}
	return x + sum_integer(x - 1);
}

console.log('sum integer:');
console.log(sum_integer(100));

function sum_square (x) {
	if(x == 0) {
		return 0;
	}
	return x * x + sum_square(x - 1);
}

console.log('sum square');
console.log(sum_square(10));

function sum (x, term) {
	if(x == 0) {
		return 0;
	}
	return term(x) + sum(x - 1, term);
}

sum(10, function(x) {
	return x;	
});
sum(10, function(x) {
	return x * x;	
});






