/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(array, cb) {
    let finalNum = array[0];

    if (cb) {
        for (i = 1; i < array.length; i++) {
            let num = array[i];

            if (cb(num) < finalNum) {
                finalNum = cb(num);
            };
        };
    } else {
        for (i = 1; i < array.length; i++) {
            let num = array[i];
            if (num < finalNum) {
                finalNum = num;
            };
        };
    };

    return finalNum;
};

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
