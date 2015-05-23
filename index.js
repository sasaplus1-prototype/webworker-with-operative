(function(){

  'use strict';

  var operation, value;

  if (typeof Promise === 'undefined') {
    operative.Promise = ES6Promise.Promise;
  }

  console.log(
    'operative.hasWorkerSupport: ' + operative.hasWorkerSupport);
  console.log(
    'operative.hasWorkerViaBlobSupport: ' + operative.hasWorkerViaBlobSupport);
  console.log(
    'operative.hasTransferSupport: ' + operative.hasTransferSupport);

  operation = operative(function(value) {
    var deferred = this.deferred();

    setTimeout(function() {
      if (value) {
        deferred.reject('reject');
      } else {
        deferred.fulfill('fulfill');
      }
    }, 0);

    return deferred;
  });

  value = !!Math.floor(Math.random() * 2);
  
  operation(value).then(function(text) {
    console.log(text);
  })['catch'](function(err) {
    console.error(err);
  });

}());
