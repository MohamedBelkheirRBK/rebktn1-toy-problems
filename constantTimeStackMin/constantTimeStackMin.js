/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */



class Stack {
  constructor() {
    this.head = null;
    this.minsize = null;
    this.smallbois = [];
    this.size = 0;
  }

  push(value) {
    if(!this.head)
      this.head = {value, after:null}
    else {
      var p = {value, after: this.head};
      this.head = p;
    }

    if(this.minsize === null || this.minsize > value){
      this.minsize = value
      this.smallbois[this.smallbois.length] = value;
    }

  }

  pop() {
    var val = this.head.value;
    this.head = this.head.after;
    this.size--;
    if(val === this.minsize){
      var i = --this.smallbois.length;
      this.minsize = this.smallbois[i-1]
    }
    return val;
  }

  size() {
    return this.size;
  }

  min() {
    return this.minsize;
  }
}


