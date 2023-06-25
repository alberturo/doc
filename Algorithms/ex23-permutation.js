//

function permutation(secuence, num) {
  for (let i = 0; i < num; i++) {
    if (secuence.indexOf(i + 1) < 0) {
      return false;
    }
  }
  return true;
}

console.log(permutation([1, 0, 3, 4, 5], 4));
