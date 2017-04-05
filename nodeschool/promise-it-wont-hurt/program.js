require('es6-promise');

('use strict');

function alwaysThrows() {
    throw new Error('OH NOES');
}

function iterate(int) {
    console.log(int);
    return int + 1;
}

var doThatShit = new Promise(function(f, r) {
    for (let i = 1; i <= 10; i++) {
        if (i > 5) {
            alwaysThrows(); // auto rejects!
        } else {
            iterate(i);
        }
    }
}).then(null, console.log);
