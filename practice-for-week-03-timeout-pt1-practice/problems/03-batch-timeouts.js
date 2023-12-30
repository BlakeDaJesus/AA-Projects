/***********************************************************************
Write a function, `batchTimeouts`, that accepts an array of callbacks and an
array of delays in milliseconds. The function should set a timeout for each
callback in the array with its corresponding delay. For example, the
callback at index 0 should be set with the delay at index 0,
the callback at index 1 should be set with the delay at index 1, and so on.
The `batchTimeouts` function should return an array containing the Timeout
objects for each timeout that was set. You may assume that both array arguments
have the same length.

In addition to Mocha, we recommend that you test your code manually using
node with the examples below to confirm the correct behavior.

Note: The test specs for this problem are valid for iterative solutions. If you
pass the specs for an iterative solution and then attempt a recursive solution,
you will need to test your new solution manually using node.

Example:

const sayHello = () => console.log('hi');
const sayGoodbye = () => console.log('bye');
const shout = () => console.log('WHAT?');
const tasks = [sayHello, sayGoodbye, shout];
const delays = [500, 200, 900];

const timeoutObjs = batchTimeouts(tasks, delays);
// should print:
//  'bye' after 200 ms
//  'hi' after 500 ms
//  'WHAT?' after 900 ms

console.log(timeoutObjs); // [ Timeout {...},  Timeout {...}, Timeout {...} ]
***********************************************************************/

/*function batchTimeouts(callbacks, delays) {
    const timeouts = [];
    for(let i = 0; i < callbacks.length; i++){
      timeouts.push(setTimeout(callbacks[i], delays[i]));
    }

    return timeouts;
}*/

function batchTimeouts(callbacks, delays) {
    // Array to store the timeouts
    const timeouts = [];

    /**
     * Recursive helper function to set the timeouts.
     *
     * @param {number} index - Index of the current callback and delay.
     */
    function setNextTimeout(index) {
        // Base case: all callbacks have been processed
        if (index === callbacks.length) {
            return;
        }

        // Set the timeout for the current callback with its corresponding delay
        const timeout = setTimeout(() => {
            // Execute the callback
            callbacks[index]();

            // Set the timeout for the next callback
            setNextTimeout(index + 1);
        }, delays[index]);

        // Store the timeout in the array
        timeouts.push(timeout);
    }

    // Start setting the timeouts
    setNextTimeout(0);

    // Return the array of timeouts
    return timeouts;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = batchTimeouts;
} catch {
  module.exports = null;
}
