// given an array of numbers, return a new array with odd numbers and even numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function odd_even_number(nums) {
  let odd = [];
  let even = [];
  let result = "";
  for (num of nums) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }
  return "Even: " + even + " Odd: " + odd;
}

console.log(odd_even_number(numbers));

function odd_even_number_op2(nums) {
  return {
    even: nums.filter((num) => num % 2 === 0),
    odd: nums.filter((num) => num % 2 !== 0),
  };
}
console.log(odd_even_number_op2(numbers));
