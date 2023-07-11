// given an array, create a new array with the first and last elements

const array = [100, 200, 300, 780];

function firstandLast(arr) {
  let first = "";
  let last = "";
  let new_elements = [];
  new_elements.push(arr[0], arr[array.length - 1]);
  return new_elements;
}

console.log(firstandLast(array));
