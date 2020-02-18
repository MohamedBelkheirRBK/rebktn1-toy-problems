/*
Queue Stack

Write a stack. Once you’re done, implement a queue using two stacks to create FIFO behavior. 
The queue should not have any storage separate from its stacks.
*/

var Stack = function() {
  var storage = [];

  this.push = function() {};

  this.pop = function() {};

  this.size = function() {};
};

var Queue = function() {
  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function() {};

  this.dequeue = function() {};

  this.size = function() {};
};
