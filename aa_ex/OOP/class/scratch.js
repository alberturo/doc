const Vehicle = require("./vehicle.js");
const Bicycle = require("./bicycle.js");
const ElectricBicycle = require("./electric-bicycle.js");
const Review = require("./review.js");
const Tester = require("./tester.js");

let validVehicle = new Vehicle("Toyota Prius", 2005, 23000);
let invalidVehicle = new Vehicle(5);

console.log(validVehicle.validate());
console.log(invalidVehicle.validate());
