/*
Implement Operators

Write three functions to replace the multiply, divide, and modulo operators. 
The only operators you may only use in your solution are addition and subtraction. 
Your functions will only have to handle integer math.

EXAMPLES:
  multiply(5, 2) // 10
  divide(5, 2) // 2
  modulo(5, 2) // 1
*/

var multiply = function(x, y) {
  for(var i = y; i!=0; i--){
    x+=x;
  }
  return x;
};

var divide = function(x, y) {
  if(y <= 0) throw Error("can't divide by zero")
  var result = 0;
  var leftover = 0;
  while(x - y >= 0) {
    x-=y;
    result++;
  }
  leftover = x;
  return [result, leftover]
};

var modulo = function(x, y) {
  var [_, result] = divide(x, y);
  return result;
};
