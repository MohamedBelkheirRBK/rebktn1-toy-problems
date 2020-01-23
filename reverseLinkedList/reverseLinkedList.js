/*
Write a function that reverses a linked list.
​
Explanation:
​
Given the below linked list:
​
	A -> B -> C -> D -> E -> null
​
Return:
​
	E -> D -> C -> B -> A -> null
​
Constraint 1: Do this in linear time
Constraint 2: Do this in constant space
Constraint 3: Do not mutate the original nodes by adding any new properties
*/

// Helpers

function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null; 
  obj.add = (val)=>{
    obj.next = Node(val);
    return obj.next;
  }
  obj.print = function(){

    if(this.next) return (this.value +", "+ this.next.print()) 
     else return this.value;
  }
  return obj;
}

var reverseLinkedList = function(linkedList) {
  var middle = linkedList;
  var next = middle.next;
  middle.next = null;
  while(next) {
    var further = next.next;
    next.next = middle;
    middle = next;
    next = further;
  }
  return middle;
};

var ll = Node(5);
ll.add(4).add(3).add(2).add(1);
console.log(ll.print());
ll = reverseLinkedList(ll);
console.log(ll.print());

