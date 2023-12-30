const readline = require('readline');

const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});

var secretNumber;
var numAttempts;

function askLimit() {
    rl.question("How many attempts would you like to guess the number I'm thinking of? ", limit => {
        numAttempts = (Number(limit) + 1);

        askRange();
    });
};

function askRange() {
    rl.question('Enter a min number: ' , min => {

        rl.question('Enter a maximum number: ', max => {
            console.log("I'm thinking of a number between " + min + ' and ' + max + '...');

            randomInRange(Number(min), Number(max));

            askGuess();
        });
    });

};

function randomInRange(num1, num2) {
    min = Math.ceil(num1);
    max = Math.floor(num2);

    secretNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return;
};

function askGuess() {
    numAttempts --;

    if (numAttempts === 0) {
        console.log('You lose!');
        return;
    };

    rl.question("Enter a guess: ", (guess) => {

        var isCorrect = checkGuess(Number(guess));

        if (isCorrect) {
            console.log('You win!');
            rl.close;
        } else {
            askGuess();
        };
    });

};

function checkGuess(num) {

    if (num > secretNumber) {
        console.log('Too high.');
        return false;
    } else if (num < secretNumber) {
        console.log("Too low.");
        return false;
    } else if (num === secretNumber){
        console.log("Correct!");
        return true;
    };

};

askLimit();
