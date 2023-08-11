// given an array of objects, return the best hobbies of the user

const users = [
  { name: "Albert", hobbies: ["study", "music", "movie"] },
  { name: "Arturo", hobbies: ["drive", "movie", "turism"] },
  { name: "Paula", hobbies: ["turism", "music", "study"] },
  { name: "Beth", hobbies: ["sport", "walk", "study"] },
];

function mappingHobbies(arrObj) {
  let mapping = {};
  for (obj of arrObj) {
    for (hobbie of obj.hobbies) {
      if (!mapping[hobbie]) {
        mapping[hobbie] = 1;
      } else {
        mapping[hobbie]++;
      }
    }
  }
  return mapping;
}

console.log(mappingHobbies(users));
