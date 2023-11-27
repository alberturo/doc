/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

function permutations(array) {
  const result = [];

  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function generatePermutations(arr, start) {
    if (start === arr.length - 1) {
      result.push([...arr]); // Add a copy of the current permutation to the result
      return;
    }

    for (let i = start; i < arr.length; i++) {
      swap(arr, start, i);
      generatePermutations(arr, start + 1);
      swap(arr, start, i); // Backtrack to restore the original array
    }
  }

  generatePermutations(array, 0);

  return result;
}

// Examples
console.log(permutations([1, 2])); // [[1, 2], [2, 1]]
console.log(permutations([1, 2, 3])); // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 2, 1], [3, 1, 2]]
