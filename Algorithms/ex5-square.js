// Draw a square empty with asterisk

function side(num) {
  let side = "";
  for (let i = 0; i < num; i++) {
    side += "*";
  }
  return side;
}

// console.log(side(10));

function square(num) {
  let drawing = side(num) + "\n";
  let content = "";
  for (let i = 0; i < num - 2; i++) {
    content = "*";
    for (let j = 0; j < num - 2; j++) {
      content += " ";
    }
    content += "*";
    drawing += content + "\n";
  }

  drawing += side(num);
  return drawing;
}
console.log(square(10));
