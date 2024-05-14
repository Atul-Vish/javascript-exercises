const fibonacci = function(number) {
    if (+number === 1) {
        return 1;
    }

    if (+number < 0) {
        return "OOPS";
    }

    let current = 1;
    let previous = 0; 
    let sum = 0;
    for (let i = 0; i < +number - 1; i++) {
        sum = current + previous;
        previous = current;
        current = sum;
    }

    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
