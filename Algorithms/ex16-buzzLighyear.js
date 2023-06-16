// given a number make a function that returns buzz when is multiple of 3 and lightyear when is multiple of 5 and buzzLightyear when is multiple of 3 and 5

// option 1
function buzzLightyear(number) {
  let numbers = "";
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numbers += "buzzLightYear \n";
    } else if (i % 3 === 0) {
      numbers += "buzz \n";
    } else if (i % 5 === 0) {
      numbers += "lightyear \n";
    } else {
      numbers += `${i} \n`;
    }
  }
  return numbers;
}

console.log(buzzLightyear(100));
