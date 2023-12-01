## Closure

a closure gives you access to an outer function's scope from an inner function.

```javascript
function suma(a) {
  return function (b) {
    return a + b;
  };
}
console.log(suma(1)(2));
```
