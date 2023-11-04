## Objects

An object is a data structure that stores other data, similar to how an array stores elements. An object differs in that each value stored in an object is associated with a key. Keys are almost always strings while values can be any data type: numbers, strings, functions, arrays, other objects, anything at all!

Objects are defined by using curly braces: {}.

```
// here "color" is the key!
> car["color"] = "Blue";
"Blue"

> car["seats"] = 2;
2

// accessing our object at the key of color
> car["color"]
"Blue"

> car["seats"]
2

> car
{color: "Blue", seats: 2}

> car["weight"]
undefined

> car
{color: "Blue", seats: 2}

> car["color"]
"Blue"

> car["color"] === undefined;
false

> car["weight"] === undefined;
true

```

While this is a common pattern, in modern JS the preferred method to check if an object exists in a key is to use the in operator:

```
> car
{color: "Blue", seats: 2}

> "color" in car;
true

> "model" in car;
false
```
