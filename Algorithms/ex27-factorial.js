// given a number return its factorial

function factorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log("The factorial of 5 is:", factorial(5));
