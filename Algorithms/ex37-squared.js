// given a number return a list of power of all natural numbers up to get to itself.

function squared(num) {
  return Math.pow(num, 2);
}

function showPower(num) {
  for (let i = 0; i <= num; i++) {
    console.log(squared(i));
  }
}

console.log(showPower(10));
