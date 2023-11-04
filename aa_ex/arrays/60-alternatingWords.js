/*
Write a function alternatingWords that accepts an array of words as an argument. The function should mutate the input array such that the words alternate between fully uppercase or lowercase. The first word should be uppercase.
*/
function alternatingWords(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      arr[i] = arr[i].toLowerCase();
    } else {
      arr[i] = arr[i].toUpperCase();
    }
  }
}

let words1 = ["Belka", "STRELKA", "laika", "DEZIK"];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik' ]

let words2 = ["Yellowstone", "Yosemite", "Zion", "Acadia", "Shenandoah"];
alternatingWords(words2);
console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia', 'SHENANDOAH' ]
