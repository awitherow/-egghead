require('es6-promise');

('use strict');

function attachTitle(word) {
    return 'DR. ' + word;
}

var manhattan = new Promise(function(fulfill, reject) {
    fulfill('MANHATTAN');
})
    .then(attachTitle)
    .then(console.log);
