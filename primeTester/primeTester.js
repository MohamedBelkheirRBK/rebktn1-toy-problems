/*
Prime Tester
A prime number is an integer greater than 1 that has no divisors other than itself and 1. 
Write a function that accepts a number and returns true if it’s a prime number, false if it’s not. 
The grader is looking at the efficiency of your solution (number of operations) as well as correctness!

primeTester(2) // true
primeTester(1) // false

*/

function primeTester(n) {
    for(var i = 2; i<n-1; i++) {
        if (n%i===0)
            return false
    }
    return true
}

function millerRabinTest(n, numOfTests = 10) {
    var [s, d] = findForm(n-1)
    var a;
    
    for(var i = 0; i< numOfTests; i++) {
        a = Math.random() * (n-2) + 1;
        var found = false;
        for(var i = 0; i<s; i++) {
            var sum = Math.pow(a, (Math.pow(2,i)*d)) % n;
            if ( sum === n-1 || sum === 1)
                found = true;
        }
        if (!found) {
            return "composite, maybe?"
        }
    }
    return "probably prime, I hope"

}

function findForm(num) {
    var s = 0;
    var d = num;
    while(true) {
        if(num%Math.pow(2, 1+s)!==0){
            break
        }
        s++
    }
    d = d / Math.pow(2, s);
    return [s, d]

}

console.log(millerRabinTest(71, 2))