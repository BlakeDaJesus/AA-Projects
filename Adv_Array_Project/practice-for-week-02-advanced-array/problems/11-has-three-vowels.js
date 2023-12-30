/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function(string) {
    // Your code here
    const vowels = 'aieou';

    const strArr = string.split('');

    const mapVowels = strArr.reduce(countVowels, {});

    vowelAmount = Object.values(mapVowels);

    function countVowels(acc, char) {
        if (!vowels.includes(char)) return acc;

        const { [char]: val = 0 } = acc;

        return {...acc, [char]: val + 1};
    };

    return Number(vowelAmount.length) > 2;
};


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
