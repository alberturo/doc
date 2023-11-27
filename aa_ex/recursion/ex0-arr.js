// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
let factorial = function (n) {
  if (n < 0) return null;
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
let sum = function (array) {
  if (array.length === 0) return 0;
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
let arraySum = function (array) {
  let total = 0;
  for (const item of array) {
    if (Array.isArray(item)) {
      total += arraySum(item);
    } else {
      total += item;
    }
  }
  return total;
};
// 4. Check if a number is even.
// isEven(2) // true
// isEven(9) // false
function isEven(number) {
  // Base case: if the number is 0, it's even
  if (number === 0) {
    return true;
  }
  // Base case: if the number is 1, it's odd
  if (number === 1) {
    return false;
  }
  // Recursive case: check if the number - 2 is even
  return isEven(number - 2);
}
// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
function sumBelow(n) {
  if (n <= 0) {
    return 0;
  }

  return n - 1 + sumBelow(n - 1);
}
// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
function range(x, y) {
  // Base case: if x is greater than or equal to y-1, return an empty array
  if (x >= y - 1) {
    return [];
  }
  // Recursive case: increment x and concatenate it with the result of the recursive call
  return [x + 1, ...range(x + 1, y)];
}
// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
let exponent = function (base, exp, count = 0) {
  let total = 0;
  if (power > 0) {
    if (count < power) {
      count++;
      total = num ** power;
      exponent(num, power, count);
    }
    return total;
  }
  if (power < 0) {
    if (count > power) {
      count--;
      total = 1 / num ** -power;
      exponent(num, power, count);
    }
    return total;
  }
};
// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
function powerOfTwo(num) {
  if (num === 1) {
    return true;
  } else if (num < 1 || num % 2 !== 0) {
    // If the number is not a positive even integer, it's not a power of two
    return false;
  } else {
    // Recursively check if half of the number is a power of two
    return powerOfTwo(num / 2);
  }
}
// 9. Write a function that reverses a string.
// reverse("hello"); // olleh
function reverse(str) {
  // Base case: if the string is empty or has only one character, it's already reversed
  if (str.length <= 1) {
    return str;
  }

  // Recursive case: reverse the substring excluding the first character
  // and concatenate the first character at the end
  return reverse(str.slice(1)) + str[0];
}

// 10. Write a function that determines if a string is a palindrome.
// palindrome("koko") // false
// palindrome("rotor") // true
// palindrome("wow") // true
function isPalindrome(str) {
  // Base case: an empty string or a single character string is a palindrome
  if (str.length <= 1) {
    return true;
  }
  // Check if the first and last characters are equal
  if (str[0] === str[str.length - 1]) {
    // Recursively check the substring without the first and last characters
    return isPalindrome(str.slice(1, -1));
  }
  // If the first and last characters are not equal, it's not a palindrome
  return false;
}
// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
function modulo(x, y) {
  if (y === 0) {
    // Cannot divide by zero, return NaN or handle it in a different way based on your requirements
    return NaN;
  }
  if (x < y) {
    // Base case: x is already smaller than y, so the remainder is x
    return x;
  }
  // Recursive case: subtract y from x until x is smaller than y
  return modulo(x - y, y);
}
// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
function multiply(a, b) {
  if (b === 0) {
    return 0;
  }
  if (b > 0) {
    return a + multiply(a, b - 1);
  }
  if (b < 0) {
    return -multiply(a, -b);
  }
}
// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
function divide(dividend, divisor) {
  // Base case: if the dividend is less than the divisor, return 0
  if (dividend < divisor) {
    return 0;
  }
  // Recursive case: subtract the divisor from the dividend and recursively call divide
  return 1 + divide(dividend - divisor, divisor);
}
// 22. Write a function that counts the number of times a key occurs in an object.
// let obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
function countKeysInObj(obj, key) {
  let count = 0;
  function countKeys(obj, key) {
    for (const prop in obj) {
      if (prop === key) {
        count++;
      }

      if (typeof obj[prop] === "object") {
        countKeys(obj[prop], key);
      }
    }
  }
  countKeys(obj, key);
  return count;
}

// 23. Write a function that counts the number of times a value occurs in an object.
// let obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
function countValuesInObj(obj, target) {
  let count = 0;

  function countRecursively(obj) {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        // If the value is an object, recursively count in that object
        countRecursively(obj[key]);
      } else if (obj[key] === target) {
        // If the value matches the target, increment the count
        count++;
      }
    }
  }
  countRecursively(obj);
  return count;
}
// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
function renameKeys(obj, oldName, newName) {
  // Base case: If obj is not an object, return it as is
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // Create a new object to store the modified properties
  const newObj = {};

  // Iterate over each key-value pair in the object
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // Recursively process nested objects
      newObj[key === oldName ? newName : key] = renameKeys(
        obj[key],
        oldName,
        newName
      );
    }
  }

  return newObj;
}
// 29. Return the sum of all even numbers in an object containing nested objects.
// let obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
function nestedEvenSum(obj) {
  let sum = 0;

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      // If the value is an object, recursively call nestedEvenSum
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      // If the value is a number and even, add it to the sum
      sum += obj[key];
    }
  }

  return sum;
}
// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
function eliminateConsecutiveDuplicates(list) {
  if (list.length <= 1) {
    return list;
  }

  // Check if the first two elements are the same
  if (list[0] === list[1]) {
    // Eliminate consecutive duplicates by skipping the next element
    return eliminateConsecutiveDuplicates(list.slice(1));
  } else {
    // Keep the current element and recursively process the rest of the list
    return [list[0], ...eliminateConsecutiveDuplicates(list.slice(1))];
  }
}

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
function numToText(str) {
  // Helper function to convert a digit to its word equivalent
  function digitToWord(digit) {
    const words = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];
    return words[digit];
  }

  // Recursive function to replace digits with their word equivalents
  function replaceDigits(text) {
    const regex = /\d/;

    // Base case: if there are no digits left, return the unchanged text
    if (!regex.test(text)) {
      return text;
    }

    // Replace the first digit found with its word equivalent
    const replacedText = text.replace(regex, (match) =>
      digitToWord(parseInt(match))
    );

    // Continue the recursion with the updated text
    return replaceDigits(replacedText);
  }

  // Start the recursion with the input string
  return replaceDigits(str);
}
// 38. Write a function for binary search.
// let array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
function binarySearch(array, target, start = 0, end = array.length - 1) {
  if (start > end) {
    return -1; // Target not found
  }

  const mid = Math.floor((start + end) / 2);

  if (array[mid] === target) {
    return mid; // Target found
  } else if (array[mid] < target) {
    // Search the right half
    return binarySearch(array, target, mid + 1, end);
  } else {
    // Search the left half
    return binarySearch(array, target, start, mid - 1);
  }
}
// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  // Split the array into two halves
  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  // Recursively sort each half
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  // Compare elements from both arrays and merge them in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // Add remaining elements from both arrays (if any)
  result = result.concat(left.slice(leftIndex), right.slice(rightIndex));
  return result;
}

// 40. Deeply clone objects and arrays.
// let obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// let obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
function clone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; // Base case: return the non-object values directly
  }

  if (Array.isArray(obj)) {
    // If the input is an array, clone each element in the array
    return obj.map((element) => clone(element));
  } else {
    // If the input is an object, clone each property in the object
    const clonedObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = clone(obj[key]);
      }
    }
    return clonedObj;
  }
}
