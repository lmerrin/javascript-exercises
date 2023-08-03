const leapYears = function(year) {

     // if there is no remainder divisable by 4
    if (year % 4 === 0){

        // if not divisable by 100 or a century year its a leap year
        if (year % 100 !== 0){
            return true
        }

        //if years (madulo) diviable by 100 are not leap years // if years (madulo) divislable by 400 are leap years 
        if (year % 100 === 0 && year % 400 === 0) {
                return true    
            }
        }
    
    // if not divisable by 400 or 4 not a leap year
    return false

};


// Do not edit below this line
module.exports = leapYears;
