function getAge(death,birth){
    if(!death){
        death = new Date().getFullYear()
    }
    return death - birth;
}

const findTheOldest = function(arr) {
    if(!arr.length){
        return "OOPS";
    }
    return arr.reduce((oldest, curr) =>{
        const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
        const currAge = getAge(curr.yearOfDeath, curr.yearOfBirth); 
        return oldestAge > currAge ? oldest : curr;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
