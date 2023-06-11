//

function minus8(num) {
  let result = `--- From ${num} to 0 --- \n`;
  for (let i = num; i > 0; i -= 8) {
    result += `# ${i} \n`;
  }
  return result;
}

console.log(minus8(100));
