var _ = require('underscore');

var courses = [{
	name: 'javascript functional programming',
	chapterNumber: 5,
	author: 'lvjiian, xuefeng'
}, {
	name: 'iphone dev quick start',
	chapterNumber: 3,
	author: 'lvjian'
}, {
	name: 'sicp',
	chapterNumber: 15,
	author: 'xuefeng'
}, {
	name: 'responsive web design',
	chapterNumber: 10,
	auhtor: 'lvjian, yuwei'
}];

_.chain(courses)
	.tap(function(item) {		
		console.log(item);
	})
	.pluck('name')
	.tap(function(name) {
		console.log(name);
	})
	.sort()
	.tap(function(sorted) {
		console.log(sorted);
	});