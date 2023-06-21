// return the greater and smaller number

function greaterSmaller(a, b) {
  let result = "";
  if (a === b) {
    result = "the numbers are equal";
  } else if (a > b) {
    result = `The greater numbers is: ${a} and the smaller is: ${b}`;
  } else {
    result = `The greater numbers is: ${b} and the smaller is: ${a}`;
  }
  return result;
}

console.log(greaterSmaller(100, 200));
