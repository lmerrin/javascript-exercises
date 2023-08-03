//const array = [1, 2, 3, 4];
//const result = removeFromArray(array, 3);


const removeFromArray = function(array, ...args) {
        // Create a new array to store the results.
        const results = [];
        // Iterate over the original array.
        for (const value of array) {
          // If the value is not in the list of arguments, add it to the results array.
          if (!args.includes(value)) {
            results.push(value);
          }
        }
        // Return the results array.
        return results;
      }

// Do not edit below this line

module.exports = removeFromArray;
