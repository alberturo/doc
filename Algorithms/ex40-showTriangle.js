// given a number show the triangle of asterisks * with that number of rows

function showTriangle(row) {
  for (let i = 1; i <= row; i++) {
    let level = "";
    for (let j = 1; j <= row; j++) {
      level += "*";
    }
  }
}

console.log(showTriangle(4));
