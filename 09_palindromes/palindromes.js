const palindromes = function (str) {
    let strLower = str.toLowerCase().replace(/[^a-z]/g, "");
    return strLower == strLower.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
