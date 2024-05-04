const repeatString = function(string, noOfTimes) {
    if (noOfTimes < 0) return "ERROR";
    
    let repeatedString = "";
    for (let i = 0; i < noOfTimes; i++) {
        repeatedString = repeatedString.concat(string);
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
