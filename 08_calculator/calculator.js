// npm test calculator.spec.js

const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
  if (arr == 0) {
    return 0
  } else {
	let sum = 0
  return arr.reduce((a, b) => a + b, sum)
}
};

const multiply = function(arr) {
	let product = 1;
  return arr.reduce((a, b) => a * b, product);
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
  if (a === 0 || a === 1)
    return 1;
  for (var i = a - 1; i >= 1; i--) {
    a *= i;
}
return a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
