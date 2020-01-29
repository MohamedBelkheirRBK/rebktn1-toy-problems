/*
Implement a function that finds the longest palindrome in a given string. 
For example, in the string "My dad is a racecar athlete", the longest palindrome is "a racecar a". 
Count whitespaces as valid characters. 
Other palindromes in the above string include "dad", "ete", " dad " (including whitespace on each side of dad).
*/

function longestPalindrome(string) {
  string = string.split("");
  var palindromes = [];
  
  for(j in string) {
    var passed = [];
    for(var c of string.slice(j)) {
      passed.push(c);
      var start = 0;
      var end = passed.length - 1;
      var matching = true;
      while (start < end) {
        if(passed[start]!==passed[end]){
          matching = false;
        }
        start++;
        end--;
      }
      if(matching)
        palindromes.push([...passed])
    }
  }

  return palindromes.reduce((max, curr)=>{
    if(curr.length>max.length)
      return curr
    return max
  }).join("")

}

console.log(longestPalindrome("My dad is a racecar athlete"))

// X O X O X O X