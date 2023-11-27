/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns it reversed.

***********************************************************************/

// function reverse(str, count = str.length, newArr = []) {
//   recursive step --> str.slice(0,str.length-1)
//   base case -->
//   if(newArr.length === count) return newArr.join("")
//   newArr.push(str[str.length-1])
//   console.log(newArr)
//   return reverse(str.slice(0,str.length-1), count, newArr)
// }

function reverse(str, count = str.length, newArr = []) {
  if (count > 0) {
    count--;
    newArr.push(str[count]);
    reverse(str, count, newArr);
  }
  return newArr.join("");
}

console.log(reverse("house")); // "esuoh"
console.log(reverse("dog")); // "god"
console.log(reverse("atom")); // "mota"
console.log(reverse("q")); // "q"
console.log(reverse("id")); // "di"
console.log(reverse("")); // ""
