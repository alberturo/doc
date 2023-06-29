// given a number, show how many years, months and days

function showYears(days) {
  let years = days / 365;
  let months = days / 30;
  return `${days} days is ${years} years and ${months} months`;
}

console.log(showYears(100));
