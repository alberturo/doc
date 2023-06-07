//

function levels(numero) {
  let levels_complete = "";
  for (let level = 1; level <= numero; level++) {
    let escalones = "";
    for (let escalon = 1; escalon <= level; escalon++) {
      escalones += "[-]";
    }
    levels_complete += escalones + "\n";
  }
  return levels_complete;
}

console.log(levels(7));
