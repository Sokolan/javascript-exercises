const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, curr) => {return total + curr;}, 0);
};

const multiply = function(arr) {
  if(!arr.length){
    return 0;
  }
  return arr.reduce((total, curr) => {return total * curr;}, 1);;
};

const power = function(base, exponent) {
	if(base === 0 && exponent === 0){
    return undefined;
  }
  if(exponent === 0){
    return 1;
  }
  if(base === 0){
    return 0;
  }
  res = 1;
  for(let i = 0 ; i < exponent ; ++i){
    res *= base;
  }
  return res;
};

const factorial = function(n) {
	if(n === 0){
    return 1;
  }
  res = 1;
  for(let i = 1 ; i <= n ; ++i){
    res *= i;
  }
  return res;
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
