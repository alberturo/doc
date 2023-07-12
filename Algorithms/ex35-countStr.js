// given an string count how many vowels and letters

function countStr(str) {
  let consonants = 0,
    vowels = 0,
    cleanStr = "";
  cleanStr = str
    .split("")
    .filter((letter) => /[áéíóú\w]/gi.test(letter) && isNaN(letter))
    .join("");
  for (let letter of cleanStr) {
    if (/[áéíóúaeiou]/gi.test(letter)) {
      vowels++;
    } else {
      consonants++;
    }
  }

  return [consonants, vowels];
}

const result = countStr("albert.. !!");
console.log("Consonants: ", result[0]);
console.log("Vowels: ", result[1]);
