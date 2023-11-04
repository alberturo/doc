/*
Given the object below, print out the values corresponding to each key
individually. Try using both dot and bracket notation where they're appropriate.
*/

const obj = {
  "first key": "1",
  second: 2,
  third_key: "three",
};

// key
function dotvsbracket2(obj) {
  for (let key in obj) {
    console.log(obj[key]);
  }
}

console.log(dotvsbracket2(obj));
