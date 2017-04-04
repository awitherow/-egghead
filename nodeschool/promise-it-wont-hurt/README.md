# promises

## what is a promise

In its most basic terms, a promise is an object that defines a method called
then. The promise object represents a value that may be available some time
in the future. It greatly simplifies asynchronous logic in JavaScript.

## fulfilling a promise

Promises have a state, either being "fulfilled", "rejected" or "pending".

A promise is invoked with `new Promise` and passed a function that takes `fulfill` and `reject` as paramters.


