/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

***********************************************************************/

function isSorted(arr) {
  if (arr.length <= 1) {
    return true;
  }
  return arr[0] <= arr[1] && isSorted(arr.slice(1));
}

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
