const sumAll = function(number1, number2) {
    if(number1 < 0 || number2 < 0 || 
        typeof number1 !== 'number' || typeof number2 !== 'number'
         || number1%1 !== 0 || number2%1 !== 0) 
        return "ERROR";
    let sum = 0;
    let startingNumber = (number1 < number2) ? number1:number2;
    let endingNumber = (number1 > number2) ?  number1:number2;
    for (let i = startingNumber; i <= endingNumber; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
