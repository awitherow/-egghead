require('es6-promise');

('use strict');

var promise = new Promise(function() {}).catch(function(err) {
    console.error(err);
});

function SelectAOrB(aOrB) {
    if (aOrB === 'a') {
        Promise.resolve('yours is correct selection!');
    } else {
        Promise.reject(new Error('yours is not the correct selection!'));
    }
}

SelectAOrB('a');
SelectAOrB('b');
