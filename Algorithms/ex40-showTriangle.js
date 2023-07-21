// given a number show the triangle of asterisks * with that number of rows

function showTriangle(num) {
  let middle = Math.floor(num - 1);
  let result = "";
  for (let row = 0; row < num; row++) {
    let level = "";
    for (let column = 0; column < 2 * num - 1; column++) {
      if (middle - row <= column && middle + row >= column) {
        level += "*";
      } else {
        level += " ";
      }
    }
    result += level + "\n";
  }
  return result;
}

console.log(showTriangle(14));
