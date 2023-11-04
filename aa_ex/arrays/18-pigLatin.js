/*
Pig Latin is a fun take on the English language where you move any consonant cluster from the start of the word to the end of the word; when words begin on a vowel, you simply add "-yay". Vowels are "aeiou".
Write a function pigLatinWord that takes in a word string and translates the word into Pig Latin. For this problem use the String's slice() method. The slice() method extracts a section of a string and returns it as a string.
Hint: Remember the String.includes method!
*/

function pigLatinWord(word) {
  let vowels = "aeiou";
  if (vowels.includes(word[0])) {
    return word + "yay";
  }
  // Iterate ex: trash
  for (let i = 0; i < word.length; i++) {
    // i = 0
    // word[i]= a
    if (vowels.includes(word[i])) {
      let sliced = word.slice(i); // ash
      let clump = word.slice(0, i); // ash
      return sliced + clump + "ay";
    }
  }
}

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"
