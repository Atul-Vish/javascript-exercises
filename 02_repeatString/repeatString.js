const repeatString = function(string, noOfTimes) {
    let repeatedString = "";
    if (noOfTimes < 0) {
        return "ERROR";
    }
    
    for (let i = 0; i < noOfTimes; i++) {
        repeatedString = repeatedString.concat(string);
    }

    return repeatedString;
};

console.log(repeatString);
// Do not edit below this line
module.exports = repeatString;
