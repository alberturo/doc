// create a function that receives 2 strings and return true or false if the strings are anagram

function cleanText(text) {
  return text.replace(/[^\w]/gi, "").toLowerCase().split("").sort().join("");
}

function anagram(str1, str2) {
  return cleanText(str1) === cleanText(str2);
}

console.log(anagram("sergio", "riesgo"));
