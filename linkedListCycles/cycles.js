/*
Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere.

Explanation:

Generally, we assume that a linked list will terminate in a null next pointer, as follows:

 A -> B -> C -> D -> E -> null

A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over.
This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:

 A -> B -> C
      ^    |
      |    v
      E <- D

Constraint 1: Do this in linear time
Constraint 2: Do this in constant space
Constraint 3: Do not mutate the original nodes in any way
*/

function Node(val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  obj.add = (val)=>{
    obj.next = Node(val);
    return obj.next;
  }
  return obj;
}

var hasCycle = function(linkedList) {
  hasIt = false;

  function doesIt(node, ...list) {
    if(list[node.value] === node){
      hasIt = true;
      return
    }
    list[node.value] = node;
    node.next && doesIt(node.next, ...list)
  }

  doesIt(linkedList, ...[])

  return hasIt;
};

var myList = Node(5);
myList.add(4).add(3).add(2).add(3).next = myList;



//algorithm idea taken from wikipedia 
function tortoiseAndHare(node) {
  var tortoise = node;
  var hare = node;
  function race() {
    tortoise = tortoise.next
    if (!hare.next) return false;
    hare = hare.next.next
    if(!hare || !tortoise) return false;
    if(hare === tortoise) return true
    return race()
  }
  return race();
}


console.log(tortoiseAndHare(myList))