const removeFromArray = function(array, ...elements) {
    for (let element of elements) {
        while (true) {
            let indexOfElement = array.indexOf(element);
            if (indexOfElement === -1) {
                break;
            }

            array.splice(indexOfElement, 1);
        }
    }

    return array;
};

const array = [2, 2, 2, 3, 6, 9, 4, 5, 8];
console.log(removeFromArray(array, 2, 6, 8));
// Do not edit below this line
module.exports = removeFromArray;
