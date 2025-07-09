const fibonacci = function(index) {
    let fibonacci = [0, 1];
    if (index < 0) return 'OOPS';
    for (let i = 1; i < index; i++) {
        fibonacci.push(fibonacci[fibonacci.length-1]+fibonacci[fibonacci.length-2]);
    }
    return fibonacci[index];

};

// Do not edit below this line
module.exports = fibonacci;
