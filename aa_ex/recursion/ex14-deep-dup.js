/***********************************************************************
A shallow copy makes a copy of the reference to X (an array), into Y.
If we were to say something like this for example:
let x = [ [1], [2, 3] ];
let y = x.slice();

In this situation, Y, is a shallow copy of X. Here both X's and Y's VALUES point to the
same place in memory. But hold on you might say, "I just checked y === x is false", while
that is true, what if I told you that x[0] === y[0] is true? Both x[0] and y[0] evaluate to [1] AND
they also share the same memory address that gives us an array of just the number 1 inside.
So for the sake of testing that our addresses are different we will use nested arrays in our
examples to know if our deep duplication has succeeded. You might have already guessed that
since we used 'slice' in the example above that 'slice' creates a shallow copy, and you are
correct. For this problem we duplicate our original array so that our function returns a new
array with different memory addresses.

Write a function, deepDup(arr), that deeply duplicates a given array. Your duplicated array,
when compared to various indexes of the original array, should evaluate to false like below.

***********************************************************************/

function deepDup(arr) {
  if (!Array.isArray(arr)) {
    return arr;
  }
  // Map creates a shallow copy. Calling the function in every element. Is not an array.
  return arr.map((i) => deepDup(i));
  // return arr.map((i) => i === deepDup(i));
}

let arr = [[1], [2, [3]]];
duped = deepDup(arr); // [[1], [2, [3]]]
// These are not* function calls.
console.log(arr[0] === duped[0]); // false
console.log(arr[1] === duped[1]); // false
console.log(arr[1][1] === duped[1][1]); // false
