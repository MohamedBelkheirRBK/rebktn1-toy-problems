/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  var found = {};
  string1 = string1.split('')
  string2 = string2.split('')
  
  for(var char in string1){
  	if(!found[string1[char]]){
  		for(var check in string2){
  			if(string1[char]===string2[check])
  				found[string1[char]] = 1;
  		}
  	}
  		
  
  }
  return Object.keys(found).join('');

};
