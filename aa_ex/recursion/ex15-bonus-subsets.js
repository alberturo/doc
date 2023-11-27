/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

function subsets(nums) {
  const result = [];
  function generateSubset(index, currentSubset) {
    // Add the currentSubset to the result
    result.push([...currentSubset]);
    // Iterate through the array, starting from the given index
    for (let i = index; i < nums.length; i++) {
      // Include the current element in the subset
      currentSubset.push(nums[i]);

      // Recursively generate subsets with the current element included
      generateSubset(i + 1, currentSubset);

      // Exclude the current element to explore subsets without it
      currentSubset.pop();
    }
  }
  generateSubset(0, []);
  return result;
}

// Examples
console.log(subsets([])); // [[]]
console.log(subsets([1])); // [[], [1]]
console.log(subsets([1, 2])); // [[], [1], [2], [1, 2]]
console.log(subsets([1, 2, 3])); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
