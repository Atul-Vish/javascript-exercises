function palindromes(string) {
    // How to remove punctuations from a String
    let punctuation = /[\.,?! ]/g;
    let text = string.replace(punctuation, "").toLowerCase();
    let newText = text.split("").reverse().join("").toLowerCase();

    return text === newText;
};



console.log(palindromes('Racecar'));

// Do not edit below this line
module.exports = palindromes;
