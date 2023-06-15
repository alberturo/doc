// the function has to return how many vowels

function countVowels(str) {
  let strToLowerCase = str.toLowerCase();
  let counter = 0;
  for (letter of strToLowerCase) {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      counter++;
    }
  }

  return counter;
}

console.log(countVowels("albertRamirez"));

function countVowels2(str) {
  let coincidences = str.match(/[aeiou]/gi);
  return coincidences ? coincidences.length : 0;
}

console.log(countVowels2("albertRamirez"));
