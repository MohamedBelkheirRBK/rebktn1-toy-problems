/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node 
* at which the intersection of two linked lists begins, 
* or null if there is no such intersection.
* 
* Example:
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return D 
* as the node of intersection.
* 
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return NULL 
* as there is no point of intersection.
* 
*    A → B → C → D
*    X → Y → Z
* 
*/

// Helper function (do not edit)
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


function linkedListIntersection(list1, list2) {
  var visited = [];
  while(list1 || list2) {
    if (visited.indexOf(list1)>=0 || visited.indexOf(list2)>=0) return true;
    list1 && visited.push(list1) && (list1 = list1.next);
    list2 && visited.push(list2) && (list2 = list2.next);
  }
  return false;
}

/*
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
*/

var A = Node("A");
var D = A.add("B").add("C").add("D");
var X = Node("X")
X.add("Y").next = D;
D.add("E").add("F");

console.log(A.print())
console.log(X.print())

console.log(linkedListIntersection(A, X))

/*
*    A → B → C → D
*    X → Y → Z
*/
var A2 = Node("A");
A2.add("B").add("C").add("D");
var X2 = Node("X");
X2.add("Y").add("Z")

console.log(A2.print())
console.log(X2.print())

console.log(linkedListIntersection(A2, X2))
