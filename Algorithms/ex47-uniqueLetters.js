// given a string, return which letters appear only once and which is the first one

function uniqueLetters(text) {
  let counter = {},
    result = [];
  letters = text.split("").filter((letter) => letter.trim().length >= 1);
  for (letter of letters) {
    if (!counter[letter]) {
      counter[letter] = 1;
    } else {
      counter[letter]++;
    }
  }
  // delete repeated letters
  for (letter in counter) {
    if (counter[letter] >= 2) {
      delete counter[letter];
    } else {
      result.push(letter);
    }
  }
  return [result, result[0]];
}

console.log(uniqueLetters("frase frase HOY"));
