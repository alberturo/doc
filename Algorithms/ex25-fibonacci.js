// given a number return the fibonacci serie

function fibonacci(num) {
  let serie = [0, 1];
  for (let i = 2; i <= num; i++) {
    serie.push(serie[i - 1] + serie[i - 2]);
  }
  return [serie, serie[num]];
}

console.log("Serie: ", fibonacci(10)[0]);
console.log("Result: ", fibonacci(10)[1]);
