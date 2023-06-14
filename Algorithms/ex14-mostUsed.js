// which lyrics is the most used

function mostUsed(text) {
  let map_letters = {};
  let max_repetitions = 0;
  let letterMostRepeted = "";
  for (letter of text) {
    if (!map_letters[letter]) {
      map_letters[letter] = 1;
    } else {
      map_letters[letter]++;
    }
  }
  for (let letter in map_letters) {
    if (
      map_letters[letter].toString().trim().length === 1 &&
      map_letters[letter] > max_repetitions
    ) {
      max_repetitions = map_letters[letter];
      letterMostRepeted = letter;
    }
  }
  console.log(map_letters);
  return letterMostRepeted;
}

console.log(
  "The most repeated letter is: ",
  mostUsed("Hey litter happy porky!")
);
