/*
Write a function initials(name) that accepts a full name as an arg. The function should return the initials for that name.
*/

function initials(name) {
  let nameArr = name.split(" ");
  let inicial = "";
  for (let i = 0; i < nameArr.length; i++) {
    inicial += nameArr[i][0].toUpperCase();
  }
  return inicial;
}

console.log(initials("anna paschall")); // 'AP'
console.log(initials("Mary La Grange")); // 'MLG'
console.log(initials("brian crawford scott")); // 'BCS'
console.log(initials("Benicio Monserrate Rafael del Toro Sánchez")); // 'BMRDTS'
