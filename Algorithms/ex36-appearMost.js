// given a array return the element that appears the most
const array = [1, 2, 3, 5, 3, 1, 3];
const data = "he is a good student, indeed he is";

function appearsMost(arr) {
  let mapping = {};
  let mostFrequentValue = 0;
  let mostFrequent = 0;
  if (typeof arr === "string") {
    arr = arr.split(" ");
  }
  for (let element of arr) {
    console.log(element);
    if (mapping[element]) {
      mapping[element]++;
    } else {
      mapping[element] = 1;
    }
  }
  for (let element in mapping) {
    if (mapping[element] > mostFrequentValue) {
      mostFrequentValue = mapping[element];
      mostFrequent = element;
    }
  }
  return {
    most_frequent: mostFrequent,
    most_Value: mostFrequentValue,
  };
}

console.log(appearsMost(data));
