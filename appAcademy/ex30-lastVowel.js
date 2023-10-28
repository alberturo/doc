/*
Write a function lastVowel(str) that takes in a string and returns the last vowel that appears sequentially in the string. Note that the string may contain capitalization.

Hint: You may find the String.toLowerCase or String.toUpperCase methods useful
*/

function lastVowel(str) {
  let vowels = "aeiouAEIOU";
  for (i = str.length; i >= 0; i--) {
    if (vowels.includes(str[i])) {
      return str[i];
    }
  }
  return null;
}

console.log(lastVowel("battery")); // 'e'
console.log(lastVowel("TUNNEL")); // 'E'
console.log(lastVowel("dog")); // 'o'
console.log(lastVowel("conventional")); // 'a'
console.log(lastVowel("rhythm")); // null
