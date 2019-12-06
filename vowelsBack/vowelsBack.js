// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.



function vowelsBack(string) {
	string = string.split('');

	for(var i in string) {
		var og = string[i];

		switch(string[i]){
			case 'c':
			case 'o':
				string[i] = string[i].charCodeAt(0)-1;
				break;
			case 'd':
				string[i] = string[i].charCodeAt(0)-3;
				break;
			case 'e':
				string[i] = string[i].charCodeAt(0)-4;
				break;
			case 'a':
			case 'i':
			case 'u':
				string[i] = string[i].charCodeAt(0)-5;
				break;
			default:
				string[i] = string[i].charCodeAt(0)+9;
		}
		
		if(string[i]>122){

			string[i] = 97+(string[i]-123);
			
		}
		else 
			if(string[i]<97){
				string[i] = 122-(97-string[i])
				
			}


		if(/[code]/.test(String.fromCharCode(string[i])))
			string[i] = og;
		else
			string[i] = String.fromCharCode(string[i])

	}
	return string.join('')

}