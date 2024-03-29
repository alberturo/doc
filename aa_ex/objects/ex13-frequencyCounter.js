/*
Given a sentence string, sentence, write a function that returns the most
common character within the sentence. If there are multiple characters that
appear the most, return the lexicographically smallest one (e.g. if 'a' and 'b' are both the most common, return 'a' because it is closest to the beginning of the alphabet). Be sure to exclude spaces when counting
characters.
*/

const sentence = "What is the most common character in this sentence";

const mostCommonChar = (sentence) => {
  let counter = {};
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (char !== " ") {
      if (counter[char] === undefined) {
        counter[char] = 1;
      } else {
        counter[char]++;
      }
    }
  }
  console.log(counter);
};

mostCommonChar(sentence); //  "t"
