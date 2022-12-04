// porcentage of a number

function calculatePercentage(percentage, value) {
  let result = (percentage / 100) * value;
  return `${percentage}% of ${value} is: ${result}`;
}

calculatePercentage(120, 100);
//'20% of 100 is: 20'
