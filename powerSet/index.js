/*
Power Set

Return an array that contains the power set of a given string. 
The power set is a set of all the possible subsets, including the empty set.

Make sure your code does the following:

  1. All characters in a subset should be sorted alphabetically, and the array of subsets should be sorted alphabetically.
  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. ‘ab’ and ‘ba’ are the same.
  3. Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as if it only contained one ‘a’.

Example: 

powerSet("a") // [ "", "a" ]
powerSet("ab") // [ "", "a", "ab", "b" ]
powerSet("obama") // [ "", "a", "ab", "abm", "abmo", "abo", "am", "amo", "ao", "b", "bm", "bmo", "bo", "m", "mo", "o" ]
powerSet("horse") // [ "", "e", "eh", "eho", "ehor", "ehors", "ehos", "ehr", "ehrs", "ehs", "eo", "eor", "eors", "eos", "er", "ers", "es", "h", "ho", "hor", "hors", "hos", "hr", "hrs", "hs", "o", "or", "ors", "os", "r", "rs", "s" ]
*/

function powerSet(string) {
  var letters = {};
  for(var i = 0; i<string.length; i++) letters[string[i]] = true;
  letters = Object.keys(letters).sort((a, b)=> a.charCodeAt(0) - b.charCodeAt(0));

  var results = [""];
  
  for(var letter of letters) {
    var res = [];
    for(var r of results) {
      res.push(letter+r)
    }
    results = results.concat(res)

  }

  

  return results.sort((a, b)=> a.charCodeAt(0) - b.charCodeAt(0))

}

console.log(powerSet("obama"))