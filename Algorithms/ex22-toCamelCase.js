//option 1

function toCamelCase(str) {
  let result = "";
  for (letter in str) {
    if (str[letter - 1] === " " || parseInt(letter) === 0) {
      result += str[letter].toUpperCase();
    } else {
      result += str[letter];
    }
  }
  return result;
}

console.log(toCamelCase("hola mundo"));

// option 2

function toCamelCase2(str) {
  let words = [];
  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.substring(1));
  }
  return words.join(" ");
}

console.log(toCamelCase2("hola mundo 2"));
