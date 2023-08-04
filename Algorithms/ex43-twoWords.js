// given an array of strings, returns another with 2 words

function twoWords(elements) {
  let new_elements = [];
  for (element of elements) {
    if (element.split(" ").length >= 2) {
      new_elements.push(element);
    }
  }
  return new_elements;
}

console.log(twoWords(["this", "this another", "and this", "sure this"]));
