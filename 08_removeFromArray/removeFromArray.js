const removeFromArray = function(array, ...remove) {
    for (let item of remove) {
        while (array.includes(item)) {
        array.splice(array.indexOf(item), 1);
        }
    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
