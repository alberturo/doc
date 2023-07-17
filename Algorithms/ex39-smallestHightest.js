// given an array of numbers, return the smallest and largest number in a object

const array = [10, 2, 13, 4, 50, 6, 27, 18, 9, 1];

function smallestLargest(arrNum) {
  arrNum.sort((a, b) => b - a); //descending order
  console.log(arrNum);
  arrNum.sort((a, b) => a - b); // ascending order
  console.log(arrNum);
  let result = {
    min: arrNum[0],
    max: arrNum[arrNum.length - 1],
  };

  return result;
}

console.log(smallestLargest(array));
