function isVowel(value) {
  value = value.toLowerCase();
  return (
    value === "a" ||
    value === "e" ||
    value === "i" ||
    value === "o" ||
    value === "u"
  );
}

function removeVowels(str) {
  let strNoVowel = "";
  for (let i = 0; i < str.length; i++) {
    if (!isVowel(str[i])) {
      strNoVowel += str[i];
    }
  }
  return strNoVowel;
}

removeVowels("albert");
