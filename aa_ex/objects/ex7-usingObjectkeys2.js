/* Given the object below, use Object.keys() to iterate through the object and
print the key if there are 2 or more "c"s within the value. */

const obj = {
  red: "circle",
  blue: "square",
  green: "hexagon",
};

const twoOrMoreC = (word) => {
  let counterC = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i].includes("c")) {
      counterC++;
    }
  }
  if (counterC >= 2) {
    return true;
  }
};

function objKey(obj) {
  const mappedObj = Object.keys(obj).map((key) => {
    const value = obj[key];
    if (twoOrMoreC(obj[key])) {
      console.log(key);
    }
  });
}

objKey(obj);

// Should print "red"
