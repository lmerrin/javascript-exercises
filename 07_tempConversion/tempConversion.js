const convertToCelsius = function(f) {
   //create variable f- with fomula - convert f to cel 
  let c =  (f - 32) * (5/9)
  if (!Number.isInteger(c)) {
    return Number(c.toFixed(1))
  }
  return c
 
  
};

const convertToFahrenheit = function(c) {
  //create variable c- with fomula - convert cel to f. 
  let f= c * (9/5) + 32
  if (!Number.isInteger(f)) {
    return Number(f.toFixed(1))
  }
  return f
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
