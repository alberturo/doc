// given 2 number return the sum, subtraction, multiplication and division.

function calculate(a, b) {
  let sum = a + b;
  let subtration = a - b;
  let multiplication = a * b;
  let division = a / b;
  return `Sum: ${sum} \n Subtraction: ${subtration} \n Multiplication: ${multiplication} \n Division: ${division}`;
}

console.log(calculate(5, 5));
