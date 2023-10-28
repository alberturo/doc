/*
Write a function threeOrSeven that takes in a number and returns true if the number is divisible by either 3 or 7 and false otherwise.
Write two versions of this function, using conditionals (if) and without using conditionals.
*/

// with conditional
function threeOrSeven1(num) {
  if (num % 7 === 0 || num % 3 === 0) {
    return true;
  } else {
    return false;
  }
}

// without conditional
function threeOrSeven2(num) {
  return num % 7 === 0 || num % 3 === 0;
}

console.log(threeOrSeven1(3)); // => true
console.log(threeOrSeven1(42)); // => true
console.log(threeOrSeven1(8)); // => false

console.log(threeOrSeven2(3)); // => true
console.log(threeOrSeven2(42)); // => true
console.log(threeOrSeven2(8)); // => false
