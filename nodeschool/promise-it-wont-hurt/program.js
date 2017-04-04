require('es6-promise');

('use strict');

var promise = new Promise(function(fulfill, reject) {
    fulfill('PROMISE VALUE');
});

// gets called second, event loop must first finish.
promise.then(console.log);

// gets called first.
console.log('MAIN PROGRAM');
