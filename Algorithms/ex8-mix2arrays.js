// create one array with common elements between both arrays

// option1: if both arrays have the same length
function commonElements(a, b) {
  let commontArray = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      commontArray.push(a[i]);
    }
  }
  return commontArray;
}

console.log(commonElements([1, 2, 3], [0, 2, 3]));

// option2: using filter

function commonFilter(a, b) {
  let commontArray = a.filter((element) => b.includes(element));
  return commontArray;
}

console.log(commonFilter([1, 2, 3], [0, 2, 3]));
