/*
Spiral Traversal

Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
and prints out every value found, but in a spiral from the upper left in to the center.

spiralTraversal([ 
  [ 1, 2, 3, 4, 5 ], 
  [ 6, 7, 8, 9, 10 ], 
  [ 11, 12, 13, 14, 15 ], 
  [ 16, 17, 18, 19, 20 ], 
  [ 21, 22, 23, 24, 25 ] 
]) 

// output: [ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]


spiralTraversal([ 
  [ 1, 2, 3, 4, 5 ], 
  [ 6, 7, 8, 9, 10 ], 
  [ 11, 12, 13, 14, 15 ], 
  [ 16, 17, 18, 19, 20 ], 
  [ 21, 22, 23, 24, 25 ] 
])	

// output: [ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]

spiralTraversal([ 
  [ 1, 2, 3 ], 
  [ 4, 5, 6 ], 
  [ 7, 8, 9 ], 
  [ 10, 11, 12 ], 
  [ 13, 14, 15 ], 
  [ 16, 17, 18 ], 
  [ 19, 20, 21 ], 
  [ 22, 23, 24 ] 
])	

// output: [ 1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 23, 22, 19, 16, 13, 10, 7, 4, 5, 8, 11, 14, 17, 20 ]

spiralTraversal([[ 1 ], [ 2 ], [ 3 ], [ 4 ]])	// [ 1, 2, 3, 4 ]

spiralTraversal([[ 1, 2, 3, 4, 5, 6, 7 ]]) // [ 1, 2, 3, 4, 5, 6, 7 ]
*/


function spiralTraversal(matrix) {
  var result = [];
  matrix = matrix.map(row=>[...row])
  var side = 0 // 0: top | 1: right | 2: bottom | 3: left
  while(matrix.length) {
    switch(side){
      case 0: 
        result = result.concat(...matrix.splice(0,1))
        break;
      case 1:
        matrix.forEach(row=>result.push(...row.splice(row.length-1,1)));
        break;
      case 2:
        var temp = matrix.splice(matrix.length-1,1)[0].reverse();
        console.log(temp)
        result = result.concat(...temp)
        break;
      case 3:
        var temp = [];
        matrix.forEach(row=>temp.push(...row.splice(0,1)));
        result = result.concat(...temp.reverse())
        break;
    }
    side = (side+1)%4
  }
  return result
}

console.log(spiralTraversal([ 
  [ 1, 2, 3, 4, 5 ], 
  [ 6, 7, 8, 9, 10 ], 
  [ 11, 12, 13, 14, 15 ], 
  [ 16, 17, 18, 19, 20 ], 
  [ 21, 22, 23, 24, 25 ] 
]))
