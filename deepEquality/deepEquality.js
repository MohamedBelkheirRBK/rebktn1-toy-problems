/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {
  var equal = true;
  var visited = [];

  function deepSearch(node1, node2) {
    if(visited.indexOf(node1)>=0 || visited.indexOf(node2)>=0){
      console.log(visited.indexOf(node1>=0))
      throw Error('circular logic')
    }
    visited.push(node1, node2)
    node1 = Object.entries(node1)
    node2 = Object.entries(node2)

    //first exit code
    if(node1.length!=node2.length){
      equal=false;
      return true;
    }

    for(var i in node1) {
      if(typeof node1[i][1] !== typeof node2[i][1]){
        equal = false;
        return true;
      }

      if(typeof node1[i][1] === 'object'){
        if(deepSearch(node1[i][1], node2[i][1])){
          equal = false;
          return true;
        }
      }else

      if(node1[i][0]!==node2[i][0] || node1[i][1]!==node2[i][1]){
        equal = false;
        return true;
      }



    }

  }

  deepSearch(apple, orange)
  

  return equal
};
var i = {a:1, b: {c:i}}
console.log(deepEquals(i,{a:1, b: {c:i}})); // true
console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})); // false