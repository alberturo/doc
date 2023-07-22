// given a minimum and maximum value return a random number

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

console.log(randomNumber(1, 100));
