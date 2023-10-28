/*
Write a function reverseSentence(sentence) that takes in a sentence as an arg. The function should return a new sentence where the order of the words is reversed. Note that you should reverse the order among words, not the order among characters.
*/

function reverseSentence(sentence) {
  let sentenceArr = sentence.split(" ");
  let newSentence = "";
  for (let i = sentenceArr.length - 1; i >= 0; i--) {
    newSentence += " " + sentenceArr[i];
  }
  return newSentence;
}

console.log(reverseSentence("I am pretty hungry")); // 'hungry pretty am I'
console.log(reverseSentence("follow the yellow brick road")); // 'road brick yellow the follow'
