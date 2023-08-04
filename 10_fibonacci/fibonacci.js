const fibonacci = function(n) {
     // Convert input to a number (in case it's a string)
    n = Number(n);

    // Handle negative input and non-integer input
    if (n < 0 || !Number.isInteger(n)) {
      return "OOPS";
    }
  
    // Base cases for Fibonacci sequence
    if (n === 0) {
      return 0;
    } else if (n === 1 || n === 2) {
      return 1;
    }
  
    // Recursive call to calculate the Fibonacci number
    return fibonacci(n - 1) + fibonacci(n - 2);
  };
// Do not edit below this line
module.exports = fibonacci;
