/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
	var check = array[Math.floor(array.length/2)];
	if(check===target)
		return true;
	if(array.length>1){
		if(check>target)
			return (binarySearch(array.slice(0, Math.ceil(array.length/2)), target))
		else
			return (binarySearch(array.slice(Math.floor(array.length/2)), target))


	}
	return false;
};
