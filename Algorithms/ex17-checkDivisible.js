// create a function that checks if a number is divisible by another one

function checkDivisible(num, posibleDivisible) {
  if (num % posibleDivisible === 0) {
    return posibleDivisible;
  }
  return 0;
}

function showDivisibles(number) {
  for (let i = 1; i <= number; i++) {
    let isDivisible = checkDivisible(number, i);
    if (isDivisible) console.log(isDivisible);
  }
}

showDivisibles(20);
