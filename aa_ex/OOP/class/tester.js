// const Vehicle = require("./vehicle.js");
const Bicycle = require("./bicycle.js");
const ElectricBicycle = require("./electric-bicycle.js");
const Review = require("./review.js");

class Tester {
  constructor(name) {
    this.name = name;
    this.reviews = [];
    this.bikeTester = false;
    this.eBikeTester = false;
  }
  submitReview(vehicle, rating, text) {
    if (!vehicle.validate()) {
      throw new Error("Cannot submit review for invalid vehicle.");
    }
    const newReview = new Review(vehicle, this, rating, text);
    newReview.addReview();
    if (vehicle instanceof Bicycle) {
      this.bikeTester = true;
    }
    if (vehicle instanceof ElectricBicycle) {
      this.eBikeTester = true;
    }
    return newReview;
  }
}

module.exports = Tester;
