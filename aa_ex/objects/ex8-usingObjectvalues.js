/*
Write a function that accepts and object, obj, and uses Object.values to print all values in the object.
*/

const obj = {
  first: "1",
  second: 2,
  third: "three",
};
const printValues = (obj) => Object.values(obj);

console.log(printValues(obj)); // "1", 2, "three" (not apparent in terminal, but the 1 would be a string)
