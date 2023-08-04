const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let total = 0;
  for (let i = 0; i < array.length; i ++) {
    total += array[i];
  }
  return total;
};

const multiply = function() {
  let result = 1;
  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
};

const power = function(a, b) {
	let result = 1; 
  for (let i = 0; i < b; i ++){
    result *=a;
  }
  return result;
};

const factorial = function(n) {
	if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
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
