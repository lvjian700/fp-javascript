var _ = require('underscore');
var construct = require('../common.js').construct;

var influences = [
	['Lisp', 'Smalltalk'],
	['Lisp', 'Scheme'],
	['Smalltalk', 'Self'],
	['Scheme', 'Javascript'],
	['Scheme', 'Lua'],
	['Self', 'Lua'],
	['Self', 'Javascript']
];

function nexts (graph, node) {
	if (_.isEmpty(graph)) {
		return [];
	}
	var pair = _.first(graph);
	var	from = _.first(pair);
	var to = _.last(pair);
	var more = _.rest(graph);

	if (_.isEqual(node, from)) {
		return construct(to, nexts(more, node));
	} else {
		return nexts(more, node);
	}
}

var ret = nexts(influences, 'Lisp');
console.log(ret);


