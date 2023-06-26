// if there is more capital letters put it all in capital letters

function capitalLowerCase(str) {
  let capitalLetter = 0;
  let lowerCase = 0;
  let result = "";
  for (letter of str) {
    if (/[A-Z]/.test(letter)) {
      capitalLetter++;
    } else {
      lowerCase++;
    }
  }
  if (capitalLetter > lowerCase) {
    result = str.toUpperCase();
  } else {
    result = str.toLowerCase();
  }
  return result;
}

console.log(capitalLowerCase("ALbeRT"));
