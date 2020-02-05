/*
Given an array of arrays, return all elements in a single array. You must use recursion.

Hint: Use Array.isArray(elem) to see if something is an array.

Example: 
flatten([[1, 1], [4], 3, [3], 4, [6, 7]]) // [1, 1, 4, 3, 3, 4, 6, 7]
*/

function flatten(arr) {
  var newArr = [];
  for(var e of arr) {
    if(Array.isArray(e)){
      newArr = newArr.concat(flatten(e))
    } else {
      newArr.push(e)
    }
  }
  return newArr
}

console.log(flatten([[1, 1], [4], 3, [3, [99]], 4, [6, 7]]))