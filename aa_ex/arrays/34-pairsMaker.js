/*
Write a function pairsMaker(arr) that takes in a an array as an argument. The function should return a 2D array where the subarrays represent unique pairs of element from the input array.
*/

function pairsMaker(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // i= a
    for (let j = i + 1; j < arr.length; j++) {
      // j=b
      result.push([arr[i], arr[j]]); // result=
    }
  }
  return result;
}

console.log(pairsMaker(["a", "b", "c", "d"])); // =>
// [ [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'a', 'd' ],
//   [ 'b', 'c' ],
//   [ 'b', 'd' ],
//   [ 'c', 'd' ] ]

console.log(pairsMaker(["Rosemary", "Alex", "Connor"])); // =>
// [ [ 'Rosemary', 'Alex' ],
//   [ 'Rosemary', 'Connor' ],
//   [ 'Alex', 'Connor' ] ]
