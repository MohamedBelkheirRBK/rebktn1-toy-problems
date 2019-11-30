/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.


//yousef challenged me to solve this in Log(n) so here we are
//filled the tree into a binary search tree, which took O(n)
//and retrieved the result which took O(Log n)
//this ends up being O(n * Log n)
//which is what complexity chrome has for its own built in sort function

var bubbleSort = function(array) {
  var myTree = new binaryTree(array[0])

  for(var i = 1; i<array.length; i++){
  	myTree.add(array[i])
  };

  return myTree.getTree();
};

var binaryTree = function(value){
	this.value = value;
	this.left = null;
	this.right = null;
}

binaryTree.prototype.add = function(value){
	if(this.value > value){
		if(this.left===null)
			this.left = new binaryTree(value);
		else
			this.left.add(value)
	}else {
		if(this.right===null)
			this.right = new binaryTree(value);
		else
			this.right.add(value)
		
	}
}

binaryTree.prototype.getTree = function() {
	var result = [];
	function loop(node){
		if(node.left!==null)
			arguments.callee(node.left)
		result.push(node.value)
		if(node.right!==null)
			arguments.callee(node.right)
	}
	loop(this)
	return result;
}

