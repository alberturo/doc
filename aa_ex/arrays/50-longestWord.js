/*
Write a function longestWord(sentence) that takes in a sentence string as an argument. The function should return the longest word in the sentence. If there is more than one "longest word", return the first of these instances.
*/

function longestWord(str) {
  let wordsArr = str.split(" ");
  let res = wordsArr[0];
  for (let i = 1; i < wordsArr.length; i++) {
    if (wordsArr[i].length > res.length) {
      res = wordsArr[i];
    }
  }
  return res;
}

console.log(longestWord("where did everyone go")); // 'everyone'
console.log(longestWord("prefer simplicity over complexity")); // 'simplicity'
console.log(longestWord("")); // ''
