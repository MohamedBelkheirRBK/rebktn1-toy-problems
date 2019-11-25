/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var current = 0;
  for(var i = 0; i<string.length; i++){
  	if(string[current]===string[i]&& i!==current){
  	    console.log(string[current], string[i], current)
  		i = 0;
  		current++;
  	}
  }
  return string[current];
};
