// Shuffle Deck
// Given an array containing a deck of cards, implement a function that shuffles the deck. The helper function orderedDeck() is not necessary for your solution; it is provided to create an ordered deck if you debug your code in the console or using snippets.
// Example:
//      var deck = orderedDeck();     // ["A♥","2♥","3♥",...,"J♦","Q♦","K♦"]
//      shuffleDeck(deck);            // ["2♠","J♣","A♦", ... ,"7♣","8♣","K♠"]


// Note:

// A shuffled deck should be completely random. That means that a given card should be as likely as any other to appear in a given deck index, 
// completely independent of the order of the input deck. Think carefully about how to be sure your algorithm generates a properly shuffled deck– it is easy 
// to accidentally create a biased algorithm.

// A further note on randomness:
// Technically, a computer-shuffled deck will usually be “pseudorandom”, not “truly” random. However, the difference between the two is too small to be detectable by any known test.
// See: http://en.wikipedia.org/wiki/Pseudorandom_number_generator
// A human shuffler is much more biased; it takes around seven normal “riffle” shuffles before a real deck is actually randomized. 
// See: https://www.dartmouth.edu/~chance/teaching_aids/books_articles/Mann.pdf

// Extra credit:
// - Even a naive algorithm can easily run in linear time. However, does your algorithm remain unbiased as N (the deck size) increases? How do you know?
// - Once you have created a properly random, linear algorithm, what is its space complexity? There is an algorithm that uses O(N) time and O(1) space (i.e., an in-place shuffle).



// You've got Helpers!

var orderedDeck = function() {
  var suits = [ '♥', '♣', '♠', '♦' ];
  var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
  var deck = [];
  suits.forEach(function(suit) {
    values.forEach(function(value) {
      deck.push(value + suit);
    });
  });
  return deck;
};

var shuffleDeck = function(array) {
    array.forEach((card, index)=>{
        var randomIndex = Math.round(Math.random()*(array.length-1));
        var temp = array[randomIndex];
        array[randomIndex] = card;
        array[index] = temp;
    })
    return array;
}




var randomnessTest = function(array, shuffler, numberOfTests = 10) {
    if(numberOfTests<1)
        throw Error("bad number of tests")

    var myArray = [...array];
    var occurences = [] // index is index | element is all occuring cards in that index | element is object with key as card, and value as occurances 
    myArray.forEach(()=>occurences.push({}));

    for(var i = 0; i< numberOfTests; i++) {
        shuffler(myArray);
        myArray.forEach((Element, index)=>{
            if(!occurences[index][Element]) occurences[index][Element] = 0;
            occurences[index][Element]++;
        })
    }
    const report = {};
    report.varietyEachIndexGot = occurences.map(x=>Object.keys(x).length);
    report.highestVariety = Math.max(...report.varietyEachIndexGot)
    report.lowestVariety = Math.min(...report.varietyEachIndexGot)
    console.log(report)
}

randomnessTest(orderedDeck(), shuffleDeck, 10)