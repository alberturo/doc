// Search for coincidences

function searchCoincidences(phrase, search) {
  let cleanText = phrase.toLowerCase().replace(/[!.,-]/gi, "");
  let result = 0;

  if (cleanText.includes(search)) {
    let words = cleanText.split(" ");
    let map = {};
    for (let word of words) {
      if (map[word]) {
        map[word]++;
      } else {
        map[word] = 1;
      }
    }
    result = map[search];
    console.log(words);
    console.log(map);
  } else {
    result = 0;
  }
  return result;
}

console.log(
  "# of conincidences: ",
  searchCoincidences("He is a genius developer indeed he is...! -", "he")
);
