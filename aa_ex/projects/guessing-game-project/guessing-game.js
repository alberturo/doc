const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("give me a number ", (num) => {
  rl.question("choose a max number ", (max) => {
    rl.question("choose a min number ", (min) => {
      const checkGuess = () => {
        const secretNumber = (min, max) => {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1) + min);
        };
        const thenumber = secretNumber(min, max);

        if (num > thenumber) {
          console.log("secretNumber-->", thenumber, "Too High");
          return false;
        } else if (num < thenumber) {
          console.log("secretNumber-->", thenumber, "Too low");
          return false;
        } else if (Number(num) === thenumber) {
          console.log("secretNumber-->", thenumber, "Corret!");
          return true;
        }
      };
      checkGuess(num);
      rl.close();
    });
  });
});
