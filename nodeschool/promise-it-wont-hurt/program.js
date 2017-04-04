require('es6-promise');

'use strict';

var promise = new Promise(function (fulfill, reject) {
  setTimeout(function() { 
    reject(new Error('REJECTED!'));
  }, 300);
}).then(null, function(err) {
  onReject(err);
});

function onReject(error) {
  console.log(error.message);
}

