/*
Sorted Insert

Given a sorted stack of integers (smallest integer at the top) and an element to insert, write a function – sortedInsert(stack, element) – which inserts the element into the correct position of the stack.

sortedInsert should manipulate the original stack and return the original stack.

The stack will have the methods:
  • isEmpty
  • peek
  • push
  • pop. 
  
You can also use count to view how many elements are in the stack. 
The stack implementation is available to view below.
*/

// the stack class is exposed here for reference, you may or may not utilize additional stacks in your algorithm.

var Stack = function(initialValue) {
  this.store = {};
  this.count = 0;

  if (initialValue !== undefined) {
    this.push(initialValue);
  }
};

Stack.prototype.isEmpty = function() {
  return !this.count;
};

Stack.prototype.peek = function() {
  return this.store[this.count];
};

Stack.prototype.push = function(val) {
  this.store[++this.count] = val;
};

Stack.prototype.pop = function() {
  if (!this.isEmpty()) {
    var tmp = this.store[this.count];
    delete this.store[this.count--];
    return tmp;
  }
};

function sortedInsert(stack, element) {
  var placed = false;
  var placeHolder = new Stack();
  while(!placed) {
    if(stack.peek()>element) {
      stack.push(element);
      placed = true;
    } else {
      placeHolder.push(stack.pop())
    }
  }
  while(placeHolder.count) {
    stack.push(placeHolder.pop())
  }
  return stack;
}


function printStack(stack) {
  var a = new Stack();
  var string = "";
  while(stack.count){
    var tmp = stack.pop();
    string += " " + tmp;
    a.push(tmp)
  }
  while(a.count){
    stack.push(a.pop())
  }
  console.log(string)
}

var myStack = new Stack(10);
myStack.push(8);
myStack.push(7);
myStack.push(6);
myStack.push(5);
myStack.push(4);
printStack(myStack)
sortedInsert(myStack,9)
printStack(myStack)
sortedInsert(myStack,9)
printStack(myStack)
sortedInsert(myStack,1)
printStack(myStack)
sortedInsert(myStack,2)
printStack(myStack)
