// given a array of number return the mean

const num = [1, 2, 3, 4, 5, 6];

// option 1
function mean(numArray) {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  let mean = sum / numArray.length;
  return mean;
}

console.log(mean(num));

// option 2 - reduce method
function meanReduce(numArray) {
  let sum = numArray.reduce((acc, curr) => {
    return acc + curr;
  });
  let mean = sum / numArray.length;
  return mean;
}
console.log(meanReduce(num));
