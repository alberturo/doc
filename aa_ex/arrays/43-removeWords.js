/*
Write a function removeEWords(sentence) that accepts a sentence string as an arg. The function should return a new string, containing only the words that don't have the letter "e" in them.
*/

function removeEWords(sentence) {
  let sentenceArr = sentence.split(" ");
  for (let i = 0; i < sentenceArr.length; i++) {
    if (sentenceArr[i].includes("e") || sentenceArr[i].includes("E")) {
      sentenceArr.splice(i, 1);
      i--;
    }
  }
  let newStr = sentenceArr.join(" ");

  return newStr;
}

console.log(removeEWords("What time is it everyone?")); // 'What is it'
console.log(removeEWords("Enter the building")); // 'building'
