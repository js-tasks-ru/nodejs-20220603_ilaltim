function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("argument is not a number", "sum.js", 1);
  } else {
    return a + b;
  }
}
module.exports = sum;
