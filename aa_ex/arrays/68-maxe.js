lea; /*
This problem is worth 7 points.
You may receive partial credit.
First, create a function called getAverage(nums) which takes a single array
of numbers and returns the average.

Then, write a function highestAverage(numsList) that takes in a
2-dimensional array of numbers and returns the index of the sub-array with the
highest average value. Hint: You may use the getAverage function as a helper
function in the highestAverage function to solve the problem.
*/

function getAverage(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum / nums.length;
}

function getHighestInArr(array) {
  let current = array[0];
  for (let i = 1; i < array.length; i++) {
    if (current < array[i]) {
      current = array[i];
    }
  }
  return current;
}
function findIndx(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      console.log(array[i][j]);
      if (array[i][j] === target) {
        return array[i][j + 1];
      }
    }
  }
}

function highestAverage(numsList) {
  let highestAvgArr = [];
  let findArr = [];
  for (let i = 0; i < numsList.length; i++) {
    let average = getAverage(numsList[i]);
    let avgIndex = [average, i];
    highestAvgArr.push(avgIndex[0]);
    findArr.push(avgIndex);
  }
  let highest = getHighestInArr(highestAvgArr);

  return findIndx(findArr, highest);
}

// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [10000, -9998];
const arrayC = [2, 100, 55, 19];
const arrayD = [4, 8, 12];

let score = 0;

if (getAverage(arrayA) === 3) score++;
if (getAverage(arrayB) === 1) score++;
if (getAverage(arrayC) === 44) score++;
if (getAverage(arrayD) === 8) score++;

if (highestAverage([arrayA, arrayB, arrayC, arrayD]) === 2) score++;
if (highestAverage([arrayA, arrayB]) === 0) score++;
if (highestAverage([arrayA, arrayD]) === 1) score++;

console.log("You have scored " + score + "/7 points.");
