// given a number return if the number is capicule or not.

function palindromicNum(number) {
  let reversed = String(number).split("").reverse().join("");
  reversed = Number(reversed);
  return number === reversed;
}

console.log(palindromicNum(2002));
