const palindromes = function (str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  // Check if the clean string is equal to its reverse
  return cleanStr === cleanStr.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
