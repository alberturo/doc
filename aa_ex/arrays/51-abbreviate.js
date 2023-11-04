/*
Write a function abbreviate(word) that takes in a string arg. The function should return a new string where all of its vowels are removed.
*/

function abbreviate(str) {
  let res = "";
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      res += str[i];
    }
  }
  return res;
}

console.log(abbreviate("wonderful")); // 'wndrfl'
console.log(abbreviate("mystery")); // 'mystry'
console.log(abbreviate("Accordian")); // 'ccrdn'
