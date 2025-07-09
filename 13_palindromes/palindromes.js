const palindromes = function (word) {
    let specialChar = /^[!@#$%^&*()_+\-=\[\]{};' :"\\|,.<>\/?]*$/;
    let cleanWord = word.toLowerCase().split('').filter((letter) => (!letter.match(specialChar))).join('');
    console.log(cleanWord);
    return cleanWord === cleanWord.split('').reverse().join('');    
};

// Do not edit below this line
module.exports = palindromes;
