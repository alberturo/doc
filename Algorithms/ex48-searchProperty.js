// given an object, search if exists a property

const user_data = {
  name: "Albert",
  age: 34,
  marriage: true,
};

function searchProperty(user, property) {
  return (
    typeof user === "object" &&
    typeof property === "string" &&
    hasOwnProperty.call(user, property)
  );
}

console.log(searchProperty(user_data, "name"));
