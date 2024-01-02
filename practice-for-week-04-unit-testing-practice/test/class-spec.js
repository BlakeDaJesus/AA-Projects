const chai = require("chai");
const expect = chai.expect;


const { Word } = require("../class");

describe("Word", function () {

    let word;

    beforeEach(() => {

        word = new Word('test');

    })

  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(word.word).to.exist;
    });

    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.be.equal('test');
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect(word.removeVowels()).to.equal("tst");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(word.removeConsonants()).to.equal('e');
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(word.pigLatin()).to.equal('esttay');
    });
  });
});
