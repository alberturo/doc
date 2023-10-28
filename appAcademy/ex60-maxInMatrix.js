/*
Write a function maxInMatrix(matrix) that takes in a 2-dimensional array (matrix) and returns the largest value in the matrix. The matrix contains at least one value.
*/

function maxInMatrix(matrix) {
  let currentMax = -Infinity;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] > currentMax) {
        currentMax = matrix[row][col];
      }
    }
  }
  return currentMax;
}

matrix = [
  [11, 2, -99],
  [20, 19, 10],
  [47, 72, 56],
];

console.log(maxInMatrix(matrix)); // 72
