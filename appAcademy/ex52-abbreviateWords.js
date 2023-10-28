/*
Write a function abbreviateWords(sentence) that takes in a sentence string. The function should return a new sentence where words that are longer than 4 characters have their vowels removed. Hint: Consider creating a helper function to remove all vowels in a string.
*/

// helper
function removeVowels(word) {
  let vowels = "aeiou";
  let newWord = "";
  for (let i = 0; i < word.length; i++) {
    if (!vowels.includes(word[i])) {
      newWord += word[i];
    }
  }
  return newWord;
}

function abbreviateWords(sentence) {
  let res = "";
  let vowels = "aeiou";
  let sentenceArr = sentence.split(" ");
  for (let i = 0; i < sentenceArr.length; i++) {
    if (sentenceArr[i].length > 4) {
      sentenceArr.splice(i, 1, removeVowels(sentenceArr[i]));
    }
  }
  return sentenceArr.join(" ");
}

console.log(abbreviateWords("what a wonderful place to live")); // what a wndrfl plc to live
console.log(abbreviateWords("she sends an excellent message ")); // she snds an xcllnt mssg
