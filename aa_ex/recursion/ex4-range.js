/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns an array of all numbers in that range, exclusive. If the end number is less than the start, return an empty array.

***********************************************************************/

function range(start, end, arr = []) {
  // 1.  --> arr.push(start)
  // 2. recursive --> range(start+1)
  // 3. base case --> if(start === end)
  if (start === end) return arr;
  if (start > end) return [];
  arr.push(start);
  return range(start + 1, end, arr);
}

console.log(range(1, 5)); // [1, 2, 3, 4]
console.log(range(3, 4)); // [3]
console.log(range(7, 6)); // []
