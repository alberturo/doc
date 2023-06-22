//

function toCamelCase(str) {
  let result = str[0].toUpperCase();
  for (letter in str) {
    if (str[letter - 1] === "") {
      result += str[letter].toUpperCase();
    }
  }
  return result;
}

console.log(toCamelCase("hola mundo"));
