// Sort a linked list using insertion sort.
// Algorithm of Insertion Sort:

//1- Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
//2- At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
// 3-It repeats until no input elements remain.

// Example 1:

// Input: 4->2->1->3
// Output: 1->2->3->4
// Example 2:

// Input: -1->5->3->4->0
// Output: -1->0->3->4->5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {

    var ordered = false;

    var num = 10
    while(num) {
        var minorOrder = true;
        var pointer = head;

        while(pointer.next) {
                minorOrder = false;
                for(var i = pointer; i.next!==null; i = i.next) {
                    if(i.val>pointer.val){
                        var temp = i.next.val;
                        i.next.val = pointer.val;
                        pointer.val = temp;
                    }
                    
                }
            
            
            pointer = pointer.next;
        }
        if (minorOrder){
            ordered = true;
            console.log('aaa')
        }
        num--;
    }



};

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }

    add(val) {
        this.next = new ListNode(val)
        return this.next;
    }

    print() {
        return this.next? this.val + ", " + this.next.print() : this.val
    }
}


var myLinkyList = new ListNode(5);
myLinkyList.add(2).add(13).add(12).add(10);
console.log(myLinkyList.print())
insertionSortList(myLinkyList)
console.log(myLinkyList.print())
