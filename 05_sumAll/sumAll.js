const sumAll = function() {
    if(arguments[0] < 0 || arguments[1] < 0 ||
        !Number.isInteger(arguments[0]) || !Number.isInteger(arguments[1])){
            return 'ERROR';
    }
    let res = 0;
    if(arguments[0] > arguments[1]){
        let tmp = arguments[0];
        arguments[0] = arguments[1];
        arguments[1] = tmp;
    }
    for(let i = arguments[0]; i <= arguments[1]; ++i){
        res += i;
    }

    return res;
};

// Do not edit below this line
module.exports = sumAll;
