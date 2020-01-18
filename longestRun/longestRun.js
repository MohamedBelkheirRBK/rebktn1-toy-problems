/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/

function longestRun(string) {
    var wrry = [0, 0];
    var current = [0, 0];
    var started = false;
    for (var c=0; c<string.length; c++) {
        console.log("Iteration #", c, " at character "+string[c])
        if (string[c]===string[c-1]) {
            console.log("character before "+string[c]+" is equal to it")
            if (!started) {
                current[0] = c-1;
                started = true;
                console.log("started counting")
            }

            current[1] = c;

        } else {
            console.log(" previous character is not equal to it")
            if (started) {
                console.log("stopped counting")
                started = false;
            }
        }
        console.log("----------------- end of iteration --------------------")
        if (wrry[1] - wrry[0] < current[1] - current[0]) {
            wrry = [...current]
        }

    }

    return wrry;
}

console.log("result: ", longestRun("abccccccc"))
