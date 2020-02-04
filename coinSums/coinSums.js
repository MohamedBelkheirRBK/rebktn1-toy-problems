/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
1p
2p
5p
10p
20p
50p
£1 (100p)
£2 (200p)

Given a given number of pence, return the possible number of ways someone could make change.
It is possible to make 5 pence in the following ways:
5 * 1p
3 * 1p + 1 * 2p
1 * 1p + 2 * 2p
1 * 5p
In other words, find all the possible combinations of coins that sum to a given pence value.
*/

// HELPERS
var coins = [1, 2, 5, 10, 20, 50, 100, 200];

function coinSums(total) {
  var change = [];
  function calculate(coin, ...pocket) {
    coin && pocket.push(coin);
    var tot = pocket.reduce(((a,b)=>a+b), 0);
    if(tot === total) change.push(pocket);
    if(tot > total) return;
    for(var coin of coins) {
      calculate(coin, ...pocket)
    }
  }

  calculate()
  return change

}

console.log(coinSums(10));