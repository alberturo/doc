/*
Write a function evenNumbers(max) that takes in a number as an arg. The function should return an array containing all positive, even numbers that are less than max.

Define this function using function expression syntax.
*/

function evenNumbers(max) {
  let evenNum = [];
  for (let i = 1; i < max; i++) {
    if (i % 2 === 0) {
      evenNum.push(i);
    }
  }
  return evenNum;
}

console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]
