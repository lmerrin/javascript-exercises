const sumAll = function(a, b) {
      //Take care of negative numbers if A is neg or B is a neg 
      if (a < 0 || b < 0) {
        return "ERROR"; 
      }
      
      //If a or b is not num return error
     if (typeof a !== "number" || typeof b !=="number") {
        return "ERROR";
      }
  
  // Declare the sum variable 
        let sum = 0
        // Check if the first number is less than the second number.
        if (a < b) {
          // Iterate through all the numbers between the first and second number.
          for (let i = a; i <= b; i++) {
            // Add the current number to the sum.
            sum += i;
          }
        } else {
          // Iterate through all the numbers between the second and first number.
          for (let i = b; i <= a; i++) {
            // Add the current number to the sum.
            sum += i;
          }
        }
        // Return the sum.
        return sum;
      };

// Do not edit below this line
module.exports = sumAll;
