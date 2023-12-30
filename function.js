// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//

let  repeatingTranslate = function(sentence) {
    let words = sentence.split(' ');
    let newWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (word.length < 3) {
            newWords.push(word);
        }

        else {
            newWords.push(translateWord(word));
        }

    }

    return newWords.join(' ');
};

let translateWord = function(word) {
    let vowels = 'aeiouAeiou';
    let i = word.length - 1;
    let last = word[word.length - 1];

    if (vowels.includes(last)) {
        return word + word;
    }
    while (i >= 0) {
        if (vowels.includes(word[i])) {
        return word + word.slice(i);
        }
    }
    i--;
};
