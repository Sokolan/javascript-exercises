const reverseString = function(str) {
    let res = "";
    for(let i = 1 ; i <= str.length ; ++i){
        res += str[str.length - i];
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
