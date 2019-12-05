/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]
*/


function characterFrequency(string) {
	var count = {};

	for(var i in string){
		if(!count[string[i]])
			count[string[i]]=1;
		count[string[i]]++
	}

	return Object.entries(count).sort((a,b)=>b[1]-a[1])
}