const findTheOldest = function(array) {
    let agesArray = [];
    const present = new Date().getFullYear();
    agesArray = array.map((person) => {
        if (!('yearOfDeath' in person)) {
            return present - person.yearOfBirth;
        }
        else {
            return person.yearOfDeath - person.yearOfBirth
        }
    });
    return array[agesArray.indexOf(Math.max(...agesArray))];

};

// Do not edit below this line
module.exports = findTheOldest;
