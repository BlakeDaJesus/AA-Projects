// import the realine module into file
const readline = require("readline");
/*
// create an interface where we can talk to the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ask the user a question
rl.question("What's up, doc? ", firstAnswer1 => {
    // print their response
    console.log(firstAnswer1 + " is up!");
    // only after user responds to question one, then ask question two
    rl.question("What's down clown? ", secondAnswer1 => {
        console.log(secondAnswer1 + " is down.");
        // close the interface
        rl.close;
    });
});
*/

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's up, doc? ", handleResponseOne);

function handleResponseOne(firstAnswer) {
  console.log(firstAnswer + " is up.");
  rl.question("What's down, clown? ", handleResponseTwo);
}

function handleResponseTwo(secondAnswer) {
  console.log(secondAnswer + " is down.");
  rl.question("What's left, Jeff? ", handleResponseThree);
}

function handleResponseThree(thirdAnswer) {
  console.log(thirdAnswer + " is left.");
  rl.close();
}
//end readline information

//exporting module (how it should look in the index.js)
const operations = ['+', '-', '*'];

function add(num1, num2) {
  // ...
}

function subtract(num1, num2) {
  // ...
}

function multiply(num1, num2) {
  // ...
}

module.exports = { // only add, subtract, and operations gets exported from this file
  add,
  subtract,
  operations
};

// The above is shorthand for below
// module.exports = {
//   add: add,
//   subtract: subtract,
//   operations: operations
// };
