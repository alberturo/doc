function invertNum(num) {
  let invertedNum = String(num).split("").reverse().join("");
  invertedNum = Number(invertedNum);
  return invertedNum;
}

console.log(invertNum(345));
