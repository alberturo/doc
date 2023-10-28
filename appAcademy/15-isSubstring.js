/*
In JavaScript the String.indexOf() method allows you to get the index of a value within an Array-like structure, including strings.
Write a function isSubstring that takes in two strings, searchString and subString. The function should return true if subString is a part of thesearchString, regardless of upper or lower case, and false if otherwise.
*/

function isSubstring(searchString, subString) {
  let searchStringLower = searchString.toLowerCase();
  let subStringLower = subString.toLowerCase();
  if (searchStringLower.indexOf(subStringLower) !== -1) {
    return true;
  } else {
    return false;
  }
}

console.log(isSubstring("The cat went to the store", "he cat went")); // => true
console.log(isSubstring("Time to program", "time")); // => true
console.log(isSubstring("Jump for joy", "joys")); // => false
