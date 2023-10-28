/*
Write a function minValue(nums) that takes in an array of numbers as an arg. The function should return the smallest number of the array. If the array is empty, the function should return null.
*/

function minValue(nums) {
  // ask how to make the conditional for if(nums === []) => return null

  let smallest = nums[0]; //4
  for (let i = 1; i < nums.length; i++) {
    //nums[i]=6
    if (smallest > nums[i]) {
      smallest = nums[i];
    }
  }
  return smallest;
}

console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3])); // -7
console.log(minValue([])); // null
