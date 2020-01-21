/*
Number to English

Write a function numberToEnglish, it should take a number and return the number as a string using English words.


numbertoEnglish(7) // "seven"
numberToEnglish(575) // "five hundred seventy-five"
numberToEnglish(78193512) // "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*/

// HELPERS

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
};

var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion'
};

function numberToEnglish(number) {
  var str = (number+"").split("").reverse();
  var chunks = [];
  while(str.length){
    chunks.push(str.splice(0,3))
  }
  var result = "";
  while(chunks.length) {
    var chunk = chunks.splice(0,1)[0];
    var power = Math.pow(10, chunks.length+1)

    result += numReader(chunk) + numbersToPlace[power]
  }

  return result;
}

function numReader(arr) {
  console.log(arr)
  var words = [];
  var twoDig = false;
  if (arr[1]=="1"){
    words.push(numbersToWords[arr[1]+arr[0]]);
    twoDig = true;
  } else {
    words.push(numbersToWords[arr[0]]);
    arr[1] && words.push(numbersToWords[arr[1]+0])
  }

  arr[2] && words.push(numbersToWords[arr[2]]+" hundred")
  
  var result = "";
  words[2] && (result += words[2]);
  (words[1] || (words[0] != "zero")) && (words[2]) && (result += " and "); 
  words[1] && (result += words[1]+" ");
  twoDig && (result += "and ")
  words[0] != "zero" && (result += words[0]);

  return result;
}

