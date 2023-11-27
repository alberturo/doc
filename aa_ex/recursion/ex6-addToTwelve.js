/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

***********************************************************************/

function addToTwelve(arr, count = 0) {
  let sum = arr[count] + arr[count + 1];
  if (count < arr.length) {
    if (sum === 12) {
      return true;
    } else {
      count++;
      return addToTwelve(arr, count);
    }
  }
  return false;
}
console.log(addToTwelve([1, 3, 4, 7, 5])); // true
console.log(addToTwelve([1, 3, 4, 7, 6])); // false
console.log(addToTwelve([1, 11, 4, 7, 6])); // true
console.log(addToTwelve([1, 12, 4, 7, 6])); // false
console.log(addToTwelve([1])); // false
