// given a number, return how many loops.
// the number has a loop when it has a close circule.

function getLoopCount(number) {
  let arrayNumbers = number.toString().split("");
  let loops = 0;
  for (num of arrayNumbers) {
    num = parseInt(num);
    if (num === 0 || num === 6 || num === 9) {
      loops++;
    } else if (num === 8) {
      loops += 2;
    }
  }
  return loops;
}

console.log(getLoopCount(1998650));
