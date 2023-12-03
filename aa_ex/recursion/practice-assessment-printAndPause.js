/***********************************************************************
Given a list of positive integers, print each integer and pause for that
many milliseconds before printing the next one. Make sure you use a recursive
approach to solve this problem.

***********************************************************************/

function printAndPause(nums) {
  if (nums.length === 0) return;
  console.log(nums[0]);
  setTimeout(() => {
    printAndPause(nums.slice(1));
  }, nums[0]);
}
