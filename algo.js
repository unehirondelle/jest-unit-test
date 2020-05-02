function Algo() {
}

Algo.prototype.reverse = function (str) {
    return str.split("").reverse().join("");
};

Algo.prototype.isPalindrome = function (str) {
    let newStr = str.split("").reverse().join("");
    return newStr === str;
};

Algo.prototype.capitalize = function (str) {
    return str.split(" ").map(word => word.slice(0, 1).toUpperCase() + word.slice(1)).join(" ");
};

module.exports = Algo;
