/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function (rounds = 3) {
    const moves = ["R", "P", "S"];
    var result = [];
    var thinking = function(pick, solution = []) {

        if(pick!=undefined){
            solution.push(moves[pick])
        }

        if(solution.length === rounds){
            result.push([...solution]);
            return;
        }

        for(var i = 0; i<3; i++){
            thinking(i, [...solution])
        }



    }

    thinking();
    return result;
};

