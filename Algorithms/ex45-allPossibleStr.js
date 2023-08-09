// given an string retun all possible substrings

const string = "hola";

function allSubstrings(str) {
  let substrings = [];
  for (letter of str) {
    let begining = letter;

    for (let i = 0; i <= str.length; i++) {
      console.log(str.substring(begining, i));
    }
  }
}

console.log(allSubstrings(string));
