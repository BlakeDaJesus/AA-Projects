1.
function sum(array) {
  let sum = 0;
  if (typeof array !== "array") {
    try {
        console.log(sum([1, 2]));
    } catch (error) {
        throw `TypeError: ${array} is not a valid array`;
    }
  }
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}


let res = sum(null);
console.log(res);

// 2.
// tests
sayName("Alex");
sayName(1);
// Your code here
function sayName(name) {
    if (typeof name !== 'string') {
        try {
            console.log(sayName([1, 3]));
        } catch (error) {
            throw `TypeError ${name} must be a string.`;
        }
    }
    return `Hi my name is ${name}`;
}

// 3.
function greet(greeting) {
    if (!greeting) {
        try {
            greet('This is a proper greeting, Sir')
        } catch (error) {
            throw 'Must be a string not a boolean';
        } finally {
            console.log('Hello World!');
        }
    } else {
        console.log(greeting);
    }
}

console.log(greet(false))
