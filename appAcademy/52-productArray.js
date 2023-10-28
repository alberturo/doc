/*
Write a function product(nums) that takes in an array of numbers. The function should return the total product of multiplying all numbers of the array together. You can assume that nums will not be an empty array.
*/

function product(nums) {
  let product = 1; //EYE!!!!!!!!

  for (let i = 0; i < nums.length; i++) {
    product *= nums[i];
  }
  return product;
}

console.log(product([10, 3, 5, 2])); // 300
console.log(product([4, 3])); // 12
