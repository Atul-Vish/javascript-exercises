const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sum = array.reduce((sum, curr) => {
    return sum + curr;
  },0);

  return sum;
};

console.log(sum([2,3,5,7]));

const multiply = function(array) {
  let result = array.reduce((total, curr) => {
    return total * curr;
  }, 1);

  return result;
};

const power = function(a, b) {
	let result = Math.pow(a, b);

  return result;
};

const factorial = function(factorial) {
  let result = 1;
	for (let i = 1; i <= factorial; i++) {
    result *= i;
  }

  return result;
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
