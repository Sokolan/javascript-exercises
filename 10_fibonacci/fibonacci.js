const fibonacci = function(n) {
    if(n <= 0){
        return "OOPS";
    }
    if(n === 1){
        return 1;
    }
    let a = 1;
    let b = 1;
    for(let i = 2 ; i < n ; ++i){
        [a,b] = [a + b, a];
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
