var _ = require('underscore');

function existy (x) {
    return x != null;
}

function cat () {
    var head = _.first(arguments);

    if (existy(head))
        return head.concat.apply(head, _.rest(arguments));
    else 
        return [];
}

function construct (head, tail) {
    return cat([head], _.toArray(tail));
}

module.exports = {
    existy: existy,
    cat: cat,
    construct: construct
}
