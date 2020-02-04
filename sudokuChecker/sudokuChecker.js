/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board. 
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input: 
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/



function sudokuChecker(board) {
  var numsRegx = /[123456789]/g;
  var rows = board.split('\n');
  var columns = [];
  var failed = false;
  for(var col = 0; col<rows.length; col++) {
    var column = "";
    rows.forEach(row=>{
      if(row.match(numsRegx)<row.length) faied = true;
      column += row[col]
    })
    if(column.match(numsRegx)<column.length) failed = true;
    columns.push(column)
  }
  
  

  return [rows, columns, failed]
}

function splitThree(array) {
  var arr = [];
  var temp = [];
  for(var i = 0; i<array.length; i++) {
    if(temp.length === 3){
      arr.push(temp);
      temp = [];
    }
    temp.push(array[i])
  }
  arr.push(temp);


  return arr;
}

function joinThree(array) {
  var arr = [];
  var temp = [];
  for(var i = 0; i<array.length; i++) {
    if(temp.length === 3){
      arr.push(temp);
      temp = [];
    }
    temp = temp.concat(array[i]);
  }
  arr.push(temp);


  return arr;
}

console.log(sudokuChecker(`735812496\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429`))

// console.log(joinThree([[123], [123], [123], [123], [123], [123]]))