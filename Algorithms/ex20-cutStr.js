//

function cutStr(str, upTo) {
  let result = "";
  if (typeof str === "string" && typeof upTo === "number") {
    result = str.substring(0, upTo);
  }
  return result;
}

console.log(cutStr("albert", 3));
