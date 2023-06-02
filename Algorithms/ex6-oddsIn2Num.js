// return how many odds are in between 2 numbers

function findOdds(num1, num2) {
  let contador = 0;
  while (num1 < num2) {
    if (num1 % 2 !== 0) {
      console.log(`Number ${num1} is odd`);
      contador++;
    }
    num1++;
  }
  return contador;
}

console.log(`Odds number:`, findOdds(1, 100));
