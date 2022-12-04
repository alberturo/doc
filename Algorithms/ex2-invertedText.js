// reverse the order of characters using only control structures

function reverseText(text) {
  inverted = "";
  for (let letter of text) {
    inverted = letter + inverted;
  }
  console.log(inverted);
}

reverseText("unitedstates");
// return 'setatsdetinu'

// reverse the order of characters with javascript methods

function reverseText2(text) {
  return text.split("").reverse().join("");
}

reverseText2("setatsdetinu");
// return 'unitedstates'
