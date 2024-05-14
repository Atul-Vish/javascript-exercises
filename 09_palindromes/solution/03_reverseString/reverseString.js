const reverseString = function(string) {
    // Inputs: Cat
    // Expected Output: taC

    // 1.Grab the letters from the left to right
    // 2.Add them with a +
    let length = string.length;
    let reversedString = "";
    for (let i = length; i >= 0; i--) {
        reversedString += string.charAt(i - 1);
    }

    return reversedString;
};


// Do not edit below this line
module.exports = reverseString;
