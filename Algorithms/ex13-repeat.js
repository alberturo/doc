function repeat(text, numVeces) {
  let textModified = "";
  for (let i = 0; i < numVeces; i++) {
    textModified += `${text} \n`;
  }
  return textModified;
}

// console.log(repeat("texto", 5));

// prototype
String.prototype.repeat = function (numVeces) {
  let textModified = "";
  for (let i = 0; i < numVeces; i++) {
    textModified += `${this} \n`;
  }
  return textModified;
};

console.log("Albert".repeat(10));
