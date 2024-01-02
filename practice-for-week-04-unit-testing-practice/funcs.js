function isFive(num) {
    if (num === 5) {
        return true;
    } else {
        return false;
    }
}

function isOdd(number) {
    if (typeof number !== 'number') {
        throw new Error;
    } else if (number % 2 === 0) {
        return false;
    } else if (number % 2 !== 0) {
        return true;
    }
}

function myRange(min, max, step = 1) {
    let rangeArr = [];

    for (i = min; i <= max; i += step) {
        rangeArr.push(i);
    };

    return rangeArr;
}


module.exports = { isFive, isOdd, myRange };
