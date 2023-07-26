const reverseString = function(wordToBeReversed) {
    
    let arrayOfCharacters = wordToBeReversed.split("");

     arrayOfCharacters.reverse();
    
     let finalWordwithCommas = arrayOfCharacters.toString();

     let finalWordwithoutCommas= finalWordwithCommas.replaceAll(",", "");

     return finalWordwithCommas;
    
};

// Do not edit below this line
module.exports = reverseString;
