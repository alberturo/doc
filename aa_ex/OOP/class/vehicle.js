// const Review = require("./review.js");
// const Tester = require("./tester.js");

class Vehicle {
  constructor(modelName, year, price, reviews) {
    this.modelName = modelName;
    this.year = year;
    this.price = price;
    this.reviews = [];
  }
  validate() {
    let validData = this.modelName && this.year && this.price;
    let validVehicle = this.year >= 1950 && this.year <= 2100;
    if (validData) {
      if (validVehicle) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  update(newModelName, newYear, newPrice) {
    let validYear = newYear >= 1950 && newYear <= 2100;
    let validPrice = newPrice > 0;
    if (validYear) {
      this.modelName = newModelName;
      this.year = newYear;
      if (validPrice) {
        this.price = newPrice;
      } else {
        throw new Error("Price must be greater than 0");
      }
    } else {
      throw new Error("Year must be between 1950 and 2100");
    }
  }
  getDetails() {
    return `The ${this.year} ${this.modelName} costs $${this.price} and has ${this.reviews.length} reviews.`;
  }
  findReviewByTester(name) {
    return this.reviews.find((review) => review.tester.name === name);
  }
}

module.exports = Vehicle;
