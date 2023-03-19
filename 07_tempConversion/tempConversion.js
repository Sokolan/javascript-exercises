const convertToCelsius = function(temp) {
  if(typeof temp !== 'number'){
    return 'ERROR';
  }
  let res = ((temp - 32) * 5 / 9);
  if(!Number.isInteger(res)){
    res = parseFloat(res.toFixed(1));
  }
  return res;
};

const convertToFahrenheit = function(temp) {
  if(typeof temp !== 'number'){
    return 'ERROR';
  }
  let res = (temp*9/5 + 32);
  if(!Number.isInteger(res)){
    res = parseFloat(res.toFixed(1));
  }
  return res;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
