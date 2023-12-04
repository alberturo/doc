// A 1-dimensional array is also known as a flattened array.
// Write a method, flatten(data), that accepts a single argument. The
// method should take in an array of any dimension and return the flattened
// version of that array. Solve this recursively.
//
// Hint:
//  - if the argument is not an array, then we have reached the base case
//  - look up the documentation for how to check if data is an array or not
//
// Examples:
//
// array_1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]]
// flatten(array_1)      // => [ 1, 2, 3, 4, 5, 6, 7, 8 ]
//
// array_2 = ['this', ['problem', 'is'], [['pretty', 'tough'], [[':)']]]]
// flatten(array_2)      // => [ 'this', 'problem', 'is', 'pretty', 'tough', ':)' ]
//
// flatten('base case')  // => [ 'base case' ]
//
// Another Hint:
//
// From the last example, you may be confused. We said that the method takes
// in an array as an arg, but we passed it a string?
// If data is not an array, then we can consider it as a 0-dimensional array.
//     0-dimensional array: 'some data'
//     1-dimensional array: ['some data']
//     2-dimensional array: [['some data']]
//     3-dimensional array: [[['some data']]]
function flatten(data) {
  if (!Array.isArray(data)) return [data];

  const newArr = [];
  data.forEach((ele) => {
    if (Array.isArray(ele)) {
      newArr.push(...flatten(ele));
    } else {
      newArr.push(ele);
    }
  });
  return newArr;
}

// Write a function, fileFinder(directories, targetFile), that accepts an object representing directories and a string respresenting a filename.
// The function should return true, if the file is contained anywhere in the given directories.
// Note that directory names will begin with '/', but file names will not.
//
// Example:
//
let desktop = {
  "/images": {
    "app_academy_logo.svg": null,
    "/parks": {
      "yosemite.jpeg": null,
      "acadia.jpeg": null,
      "yellowstone.png": null,
    },
    "/pets": {
      "trixie_lou.jpeg": null,
      "rolo.jpeg": null,
      "opal.jpeg": null,
      "diana.jpeg": null,
    },
  },
  "/music": {
    "hey_programmers.mp3": null,
    "/genres": {
      "/rock": {
        "everlong.flac": null,
        "livin_on_a_prayer.mp3": null,
      },
      "/hip_hop": {
        "express_yourself.wav": null,
        "ny_state_of_mind.mp3": null,
      },
    },
  },
};
//
// console.log(fileFinder(desktop, "app_academy_logo.svg")); // => true
// console.log(fileFinder(desktop, "yosemite.jpeg")); // => true
// console.log(fileFinder(desktop, "everlong.flac")); // => true
// console.log(fileFinder(desktop, "sequoia.jpeg")); // => false

function fileFinder(directories, targetFile) {
  for (let key in directories) {
    if (key === targetFile || fileFinder(directories[key], targetFile)) {
      return true;
    }
  }
  return false;
}

// Write another function, pathFinder(directories, targetFile), that returns the path that contains the targetFile.
// If the targetFile is not found in the directories, then return null.
// You can assume the files are unique.
//
// Example using the same desktop from previously:
//

function pathFinder(directories, targetFile) {
  for (let key in directories) {
    if (key === targetFile) return "/" + targetFile;

    let subdir = directories[key];
    let res = pathFinder(subdir, targetFile);
    if (res !== null) {
      return key + res;
    }
  }
  return null;
}
console.log(pathFinder(desktop, "trixie_lou.jpeg")); // => '/images/pets/trixie_lou.jpeg'
console.log(pathFinder(desktop, "everlong.flac")); // => '/music/genres/rock/everlong.flac'
console.log(pathFinder(desktop, "honeybadger.png")); // => null
