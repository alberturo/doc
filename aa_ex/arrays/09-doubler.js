/*
Write a function doubler(numbers) that takes an array of numbers and returns a new array
where every element of the original array is multiplied by 2.
*/

// while loop
function doubler1(numbers) {
  let newArray = [];
  let i = 0;
  while (i < numbers.length) {
    newArray.push(numbers[i] * 2);
    i++;
  }
  return newArray;
}

console.log(doubler1([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler1([7, 1, 8])); // => [14, 2, 16]

// for loop
function doubler2(numbers) {
  let newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    newArray.push(numbers[i] * 2);
  }
  return newArray;
}

console.log(doubler2([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler2([7, 1, 8])); // => [14, 2, 16]
