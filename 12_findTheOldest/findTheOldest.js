const findTheOldest = function(people) {
  // Get the current year.
 const currentYear = new Date().getFullYear();

 // Find the person with the oldest birth year.
 return people.reduce((oldest, person) => {
   // Find oldest persons age 
   const oldestAge = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : currentYear - oldest.yearOfBirth;
   const personAge= person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : currentYear - person.yearOfBirth;
  // 
   return oldestAge > personAge ? oldest : person; 
 }); 
};



// Do not edit below this line
module.exports = findTheOldest;
