// given an array, return the array without duplicates.

const array = [1, 2, 3, 1, 2];

function deleteDuplicates(array) {
  let filtered = array.filter((item, index) => array.indexOf(item) === index);
  return filtered;
}

console.log(deleteDuplicates(array));
