# promises

## what is a promise

In its most basic terms, a promise is an object that defines a method called
then. The promise object represents a value that may be available some time
in the future. It greatly simplifies asynchronous logic in JavaScript.

## fulfilling a promise

Promises have a state, either being "fulfilled", "rejected" or "pending".

A promise is invoked with `new Promise` and passed a function that takes `fulfill` and `reject` as paramters.


## rejection and fulfillment

Once fulfilled, or rejected, the opposite action cannot be taken.

## async

You can expect that the functions passed to the then method of a
promise will be called on the next turn of the event loop.

## dev friendly promises

Rejections can be caught with the `.catch()` chain.

