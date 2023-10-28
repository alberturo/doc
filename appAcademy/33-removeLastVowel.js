/*
Write a function removeLastVowel(word) that takes in a string and returns the string with its last vowel removed.
*/

function removeLastVowel(word) {
  let vowels = "aeiouAEIOU";
  let newWord = "";
  let wordSplited = word.split("");
  for (let i = wordSplited.length - 1; i >= 0; i--) {
    if (vowels.includes(wordSplited[i])) {
      wordSplited.splice(i, 1);
      return wordSplited.join("");
    }
  }
  return word;
}

console.log(removeLastVowel("bootcamp")); // 'bootcmp'
console.log(removeLastVowel("better")); // 'bettr'
console.log(removeLastVowel("graph")); // 'grph'
console.log(removeLastVowel("thy")); // 'thy'
