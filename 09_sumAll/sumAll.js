const sumAll = function(number1, number2) {
    if(number1 < 0 || number2 < 0 || isNaN(number1) || isNaN(number2) || number1%1 !== 0 || number2%1 !== 0) return "ERROR";
    let sum = 0;
    let startingNumber = a ? a < b:b;
    let endingNumber = b ? a > b:a;
    for (let i = 0; i < endingNumber; i++) {
        sum += i + startingNumber;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
