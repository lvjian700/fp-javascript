var _  = require('underscore');

var curry = function(func) {
    return function(args) {
        return func(args); 
    };
}

