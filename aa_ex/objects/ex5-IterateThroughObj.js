/* Write a function printObject(obj) that prints out all key-value pairs of an object. The format should be key - value.
HINT: use a for loop*/
let bootcamp = {
  name: "App Academy",
  color: "Red",
  population: 120,
};

const printObject = (obj) => {
  for (let key in obj) {
    console.log(key + "-" + obj[key]);
  }
};

printObject(bootcamp); // prints
// name - App Academy
// color - Red
// population - 120
