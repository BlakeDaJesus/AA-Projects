const chai = require("chai");
const expect = chai.expect;
const { isFive, isOdd, myRange } = require("../funcs");

describe("isFive(num)", () => {
  it("should return true if the num is 5 otherwise false", () => {
    const num1 = 5;

    const actual1 = isFive(num1); // should be true

    expect(actual1).to.be.true;

    const otherInput = "not 5";
    const num2 = 4;

    const actual2 = isFive(num2); // should be false
    const actual3 = isFive(otherInput); // should be false

    expect(actual2).to.be.false;
    expect(actual3).to.be.false;
  });
});
// checking if the function isFive checks to see if input === 5
// returns a boolean
// num1 should === 5
// creates other input of string 'not 5' to test (should return false)
// tests if when num2 !== 5 (false)


describe("isOdd(number)", () => { // checks for func named "isOdd" with a number input
  it("should return true if number is odd", () => { // should return a boolean of true if number is odd
    // creating 3 odd numbers to test
     num1 = 3;
    const num2 = 2953;
    const num3 = -999;

    // runs variables created through function to test result
    const actual1 = isOdd(num1); // should be true
    const actual2 = isOdd(num2); // should be true
    const actual3 = isOdd(num3); // should be true

    expect(actual1).to.be.true;// all should return true
    expect(actual2).to.be.true;
    expect(actual3).to.be.true;
  });

  it("should return false if the num is even", () => { //should return boolean of false if number is even
    // creating 3 even numbers to test
    const num1 = 4;
    const num2 = 2952;
    const num3 = -998;

    // runs variables created through function to test result
    const actual1 = isOdd(num1); // should be false
    const actual2 = isOdd(num2); // should be false
    const actual3 = isOdd(num3); // should be false

    expect(actual1).to.be.false;// all should return true;
    expect(actual2).to.be.false;
    expect(actual3).to.be.false;
  });

  it("should throw an error if num is not type of Number", () => { // should return error of number is not a Number
    // creating 3 strings to test
    const string = "i am a string";
    const object = { i: "am", an: "object" };
    const array = ["i", "am", "an", "array"];

    // runs variables created through function to test result;
    expect(() => isOdd(string)).to.throw(Error);// all should return Error
    expect(() => isOdd(object)).to.throw(Error);
    expect(() => isOdd(array)).to.throw(Error);
  });
});

describe("myRange(min, max, step)", () => { // checks for func named myRange that accepts 3 variables (min, max, step)
  context("if step is not provided", () => { // checks what function does if third variale is not provided
    it("should return the correct array with default value step=1", () => { // if no step it should return an array with the default step value of 1;
      // creates two arrays to check functionality
      const [min1, max1] = [0, 5];
      const [min2, max2] = [6, 3];

      // save function with arrays to variable for testing
      const actual1 = myRange(min1, max1);
      const expected1 = [0, 1, 2, 3, 4, 5];
      const actual2 = myRange(min2, max2);
      const expected2 = []; // if min is higher than max it should return an empty array

      expect(actual1).to.eql(expected1);// run variables through function
      expect(actual2).to.eql(expected2);// both should equal the expected output
    });
  });

  context("if step is provided", () => { // checks that func runs properly with the step provided
    it("should return the correct array", () => { // should return an array
      // creates 3 arrays to check functionality
      const [min1, max1, step1] = [0, 5, 1];
      const [min2, max2, step2] = [0, 5, 2];
      const [min3, max3, step3] = [9, 5, 2];

      // save function with arrays to variable for testing
      const actual1 = myRange(min1, max1, step1);
      const expected1 = [0, 1, 2, 3, 4, 5];
      const actual2 = myRange(min2, max2, step2);
      const expected2 = [0, 2, 4];
      const actual3 = myRange(min3, max3, step3);
      const expected3 = [];

      expect(actual1).to.eql(expected1);// should return expected output
      expect(actual2).to.eql(expected2);
      expect(actual3).to.eql(expected3);
    });
  });
});
