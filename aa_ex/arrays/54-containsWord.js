/*
Write a function containsWord(sentence, targetWord) that accepts two strings as args. The function should return a boolean indicating whether the targetWord is found inside of the sentence. Solve this without using String's indexOf() or includes() methods.
*/

function containsWord(sentence, targetWord) {
  let sentenceLower = sentence.toLowerCase();
  let sentenceArr = sentenceLower.split(" ");
  for (let i = 0; i < sentenceArr.length; i++) {
    if (sentenceArr[i] === targetWord) {
      return true;
    }
  }
  return false;
}

console.log(containsWord("sounds like a plan", "like")); // true
console.log(containsWord("They are great", "they")); // true
console.log(containsWord("caterpillars are great animals", "cat")); // false
console.log(containsWord("Cast the net", "internet")); // false
