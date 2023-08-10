// given an string retun all possible substrings

const string = "hola";

function allSubstrings(str) {
  let substrings = [];
  for (letter in str) {
    let begining = letter;
    for (let i = 0; i <= str.length; i++) {
      let end = parseInt(i) + parseInt(begining);
      substrings.push(str.substring(begining, end));
    }
  }
  return substrings;
}

console.log(allSubstrings(string));
