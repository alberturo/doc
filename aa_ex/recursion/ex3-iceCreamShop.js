/**********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an array of ice cream flavors available at the ice cream shop, as well as the user's favorite ice cream flavor. Recursively find out whether or not the shop offers their favorite flavor.
**********************************************************************/

function iceCreamShop(flavors, favorite) {
  if (flavors.length === 0) return false;
  if (flavors[0] === favorite) {
    return true;
  } else {
    return iceCreamShop(flavors.slice(1), favorite);
  }
  return false;
}

console.log(iceCreamShop(["vanilla", "strawberry"], "blue moon")); // false
console.log(
  iceCreamShop(
    ["pistachio", "green tea", "chocolate", "mint chip"],
    "green tea"
  )
); // true
console.log(
  iceCreamShop(
    [
      "cookies n cream",
      "blue moon",
      "superman",
      "honey lavender",
      "sea salt caramel",
    ],
    "pistachio"
  )
); // false
console.log(iceCreamShop(["moose tracks"], "moose tracks")); // true
console.log(iceCreamShop([], "honey lavender")); // false
