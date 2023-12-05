/***********************************************************************
Write a recursive function called `productMatch` which takes
an array of numbers and a target product and returns a boolean indicating
whether any pair of distinct numbers matches the product when multiplied
together.

Your function should accept a default argument called boolean which
holds the return value. Each recursive step should reduce the size of the
numbers array after checking to see if pairs of numbers multiply to match the
target product.


// Examples:

productMatch([4, 2, 5, 8], 16);       // true
productMatch([8, 1, 9, 3], 8);        // true
productMatch([3, 4], 12);             // true
productMatch([3, 4, 6, 2, 5], 12);    // true
productMatch([4, 2, 5, 7], 16);       // false
productMatch([8, 4, 9, 3], 8);        // false
productMatch([3], 12);                // false

***********************************************************************/

function productMatch(numbers, product, boolean = false, count = 0) {
  // Your code here
  // 1. Check if a number in the array multiplied by any other number in the array equals the product
  // 2. Adjust the boolean value as needed
  // 3. Remove an item from the array
  // 4. Recurse until the `numbers` array is empty (base case)
  let mult = numbers[count] * numbers[count + 1];
  if (count < numbers.length) {
    console.log(numbers, product);
    if (mult === product) {
      return true;
    } else {
      count++;
      return productMatch(numbers, product, boolean, count);
    }
  }
  return false;
}

/***********************************************************************
Write a function named `dynamicRotate(num)`. When invoked, the
`dynamicRotate` function will accept a number to be used as the
rotation amount and return a function. Positive numbers rotate
the array to the right and negative numbers rotate to the left.

The function returned by `dynamicRotate` will accept an array to
be rotated by the amount provided when `dynamicRotate` was
first invoked. It will return the original array mutated by
the given rotation.

Examples:

```js
let arr = ['a', 'b', 'c', 'd', 'e'];
rotateRightTwo = dynamicRotate(2);
rotateRightTwo(arr);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotateLeftOne = dynamicRotate(-1);
rotateLeftOne(animals)
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
```
***********************************************************************/

function dynamicRotate(num) {
  return function (arr) {
    if (num > 0) {
      for (let i = 0; i < num; i++) {
        let popped = arr.pop();
        arr.unshift(popped);
      }
      return arr;
    }
    if (num < 0) {
      for (let i = 0; i < -num; i++) {
        let shifted = arr.shift();
        arr.push(shifted);
      }
      return arr;
    }
  };
}

// let arr = ["a", "b", "c", "d", "e"];
// rotateRightTwo = dynamicRotate(2);
// console.log(rotateRightTwo(arr));
// console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

// let animals = ["wombat", "koala", "opossum", "kangaroo"];
// rotateLeftOne = dynamicRotate(-1);
// console.log(rotateLeftOne(animals));
// console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]

/***********************************************************************
Write a function `thunderstorm` that takes an array containing a series
of strings that represents storm events ("lightning", "wind", "rain"). Your
function should `console.log` each storm event, followed by a pause of 200ms
after each event.

- For the "lightning" storm event, you should first log a "FLASH!" followed by a
  "BOOM!" 400ms later.
    - Note: If there is another storm event after the lightning, it should
      execute 200ms after the "FLASH!"
- For the "rain" or "wind" event, you should simply log the name of the storm
  event.

Note: You must use a recursive approach to solve this problem.
__________________________________________________
Example #1:

let stormEvents1 = ["lightning", "wind", "rain"];

thunderstorm(stormEvents1);
// print 'FLASH!'   then pause for 200ms
// print 'wind'     then pause for 200ms
// print 'BOOM!'    (exactly 400ms after 'FLASH!')
// print 'rain'     (exactly 200ms after 'wind')

__________________________________________________
Example #2:

let stormEvents2 = ["lightning"];

thunderstorm(stormEvents2);
// print 'FLASH!'   then pause for 200ms
// print 'BOOM!'    (exactly 400ms after 'FLASH!')

__________________________________________________
Example #3:

let stormEvents3 = ["rain", "wind"];

thunderstorm(stormEvents3);
// print 'rain'    then pause for 200ms
// print 'wind'    (200ms after 'rain')

***********************************************************************/

function thunderstorm(stormEvents) {
  if (stormEvents.length === 0) return;
  console.log(stormEvents[1]);
  setTimeout(() => {
    thunderstorm(stormEvents.slice(1));
  }, 200);
}

let stormEvents1 = ["lightning", "wind", "rain"];

// thunderstorm(stormEvents1);
// print 'FLASH!'   then pause for 200ms
// print 'wind'     then pause for 200ms
// print 'BOOM!'    (exactly 400ms after 'FLASH!')
// print 'rain'     (exactly 200ms after 'wind')
