/***********************************************************************
1. Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and
2. returns and array with all the nested contents on one level.

Do not use the built in Array.flat.

***********************************************************************/
// Helper Function
function recursion(i, arr, result) {
  if (i >= arr.length) {
    return;
  }
  if (Array.isArray(arr[i])) {
    recursion(0, arr[i], result);
  } else {
    result.push(arr[i]);
  }
  debugger;
  recursion(i + 1, arr, result);
}

// Main Function
function flatten(arr) {
  let result = [];
  recursion(0, arr, result);
  return result;
}

console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
