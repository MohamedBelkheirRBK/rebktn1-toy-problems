/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

function largestProductOfThree(array) {
    var biggest;
    for(var first of array) {
        for(var second of array) {
            for(var third of array) {
                if(!biggest || biggest<first*second*third && (first!==second && second !==third && third!==first))
                    biggest=first*second*third
            }
        }
    }
    return biggest
}

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40