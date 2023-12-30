/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

let suffixCipher = function(sentence, obj) {
    let arr = sentence.split(' ');
    let finalArr = [];
    let newObj = {};
    let firstKey = Object.keys(obj)[0];
    let secondKey = Object.keys(obj)[1];
    newObj[firstKey] = Object.values(obj)[0];
    newObj[secondKey] = Object.values(obj)[1];

    for (i = 0; i < arr.length; i++) {
        let word = arr[i];

        if (word.includes(firstKey)) {
            finalArr.push(newObj[firstKey](word));
        } else if (word.includes(secondKey)) {
            finalArr.push(newObj[secondKey](word));
        } else {
            finalArr.push(word);
        };
    };

    return finalArr.join(' ');
};

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
