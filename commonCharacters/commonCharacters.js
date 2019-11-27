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




var commonCharacters = function(string) {
  var found = {};
  var result = "";
  for(var char in string){
  	
  	if(!found[string[char]])
  		found[string[char]] = 0;

  		if(found[string[char]]<arguments.length){
  			
  			for(var i= 1; i<arguments.length; i++){
  				
  				for(var c of arguments[i]){
  					if(string[char]===c)
  						found[string[char]]++;
  				}

  			}
  		}
  		
  	
  		
  
  }
  for(var letter in found){
      console.log(found[letter], arguments.length-1)
  	if(found[letter]===arguments.length-1){
  	    result+= letter;

  	}
  		
  }
  return result
};
