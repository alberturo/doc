function divideArray(array, num) {
  let arrays = [];
  for (let element of array) {
    let last = arrays[arrays.length - 1];
    if (!last || last.length === num) {
      arrays.push([element]);
    } else {
      last.push(element);
    }
  }
  return arrays;
}

console.log(divideArray([1, 2, 3, 4, 5, 6, 7], 3));
