function censurado(text = false, search = false) {
  let resultado = "";
  if (!text && !search) {
    result = "You cannot read the text and the search";
  } else if (!text && search) {
    result = "You cannot read the text";
  } else if (text && !search) {
    result = "You cannot make the searching";
  } else if (text && search) {
    result = text.replace(new RegExp(search, "gi"), "[-Banned]");
  }
  return result;
}

console.log(censurado("Hola hola hola", "hola"));
