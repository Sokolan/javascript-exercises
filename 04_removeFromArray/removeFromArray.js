const removeFromArray = function(arr, ...args) {
    let res = [];
    arr.forEach(element => {
        if(!args.includes(element)){
            res.push(element);
        }
    });
    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
