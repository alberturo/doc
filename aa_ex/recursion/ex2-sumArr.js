/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!
***********************************************************************/
// op1
// function sumArray(arr) {
//   let popped;
//   if(arr.length === 0) return 0 //in the last call will return 0
//  popped = arr.pop()
//  return popped + sumArray(arr)
// }
// op2
// function sumArray(arr){
//   if(arr.length === 0) return 0
//   return arr[0]+sumArray(arr.slice(1))
// }
//op3
function sumArray(arr, count = 0) {
  if (count < arr.length) {
    return arr[count] + sumArray(arr, count + 1);
  } else {
    return 0;
  }
}

console.log(sumArray([1, 2, 3])); //  6
console.log(sumArray([0, 1, -3])); //  -2
console.log(sumArray([1, 2, 3, 4, 5])); // 15
