/*
Write a function longWords(words) that takes in an array of words. The function should return an array containing only the words that are longer than 5 characters.
*/

function longWords(words) {
  moreThanFive = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
      moreThanFive.push(words[i]);
    }
  }
  return moreThanFive;
}

console.log(longWords(["bike", "skateboard", "scooter", "moped"])); // [ 'skateboard', 'scooter' ]
console.log(longWords(["couscous", "soup", "ceviche", "solyanka", "taco"])); // [ 'couscous', 'ceviche', 'solyanka' ]
