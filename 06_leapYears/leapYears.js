const leapYears = function(year) {
    if(!Number.isInteger(year)){
        return 'ERROR';
    }
    if(year < 0){
        return 'ERROR';
    }
    else if(year % 4 !== 0){
        return false;
    }
    else if(year % 100 === 0 && year % 400 !== 0){
        return false;
    }
    // Else year is divisible by 4, not by 100 and 400 together (400, 1600 ...)
    return true;
    
};

// Do not edit below this line
module.exports = leapYears;
