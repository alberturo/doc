// given an array of numbers, return another array with the power of 2.

const array = [1, 2, 3, 4, 5, "albert"];
function power2(arr) {
  let onlyNum = arr.filter((item) => typeof item === "number");
  console.log(onlyNum);
  let result = onlyNum.map((item) => Math.pow(item, 2));
  return result;
}

console.log(power2(array));
