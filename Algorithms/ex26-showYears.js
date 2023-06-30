// given a number, show how many years, months and days

function showYears(days) {
  let years = Math.floor(days / 365);
  let remainingDays = days % 365;
  let months = Math.floor(days / 30);
  return `${days} days is ${years} years and ${months} months`;
}

console.log(showYears(920));
