require('es6-promise');

'use strict';

var promise = new Promise(function (fulfill, reject) {
  fulfill('I FIRED');
  reject(new Error('I DID NOT FIRE'));
  
}).then(function(success) {
  console.log(success);
}, function(err) {
  onRejected(err);
});

function onRejected(error) {
  console.log(error.message);
}
