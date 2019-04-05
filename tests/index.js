const { expect } = require('chai');
const {
  arrayGenerator,
  getDivisorIndex,
  getDivisibleIndexes,
  getBothIndex,
  replaceElements,
  divisibleByBoth, } = require('../utils');

const DESIRED_OUTPUT = [1, 2, "foo", 4, "bar", "foo", 7, 8, "foo", "bar", 11, "foo", 13, 14, "foobar", 16, 17, "foo", 19, "bar", "foo", 22, 23, "foo", "bar", 26, "foo", 28, 29, "foobar", 31, 32, "foo", 34, "bar", "foo", 37, 38, "foo", "bar", 41, "foo", 43, 44, "foobar", 46, 47, "foo", 49, "bar", "foo", 52, 53, "foo", "bar", 56, "foo", 58, 59, "foobar", 61, 62, "foo", 64, "bar", "foo", 67, 68, "foo", "bar", 71, "foo", 73, 74, "foobar", 76, 77, "foo", 79, "bar", "foo", 82, 83, "foo", "bar", 86, "foo", 88, 89, "foobar", 91, 92, "foo", 94, "bar", "foo", 97, 98, "foo", "bar"];

describe('Test suites for exercise ', function() {

    it('arrayGenerator should generate an array of n integers by max given', function() {
      const testArray = arrayGenerator(10);
      expect(testArray).to.be.an('array');
      expect(testArray[testArray.length-1]).to.be.equal(10);
    });

    it('getDivisorIndex should return a number or undefined if given number is multiple', function() {
      const testDivisorOne = getDivisorIndex(10, 5, 1);
      const testDivisorTwo = getDivisorIndex(10, 3, 1);
      expect(testDivisorOne).to.be.a('number');
      expect(testDivisorOne).to.be.equal(1);
      expect(testDivisorTwo).to.be.a('undefined');
    });

    it('getDivisibleIndexes should return an array of indexes of multiples of a given number in an array', function() {
      const testArray = arrayGenerator(10);
      const arrayOfMultiples = getDivisibleIndexes(testArray, 3);
      expect(arrayOfMultiples).to.be.a('array');
      expect(arrayOfMultiples.length).to.be.equal(3);
      expect(arrayOfMultiples).to.deep.equal([2,5,8]);
    });

    it('getBothIndex should return an array with the coincidences of elements in both arrays', function() {
      const indexOne  = [12 , 11, 1, 20];
      const indexTwo = arrayGenerator(50);
      const both = getBothIndex(indexTwo, indexOne);
      expect(both).to.be.a('array');
      expect(both).to.be.deep.equal(indexOne);
    });

    it('replaceElements should transform a collection of indexes to strings in a current collection', function() {
      const testArray  = arrayGenerator(10);
      const indexes = getDivisibleIndexes(testArray, 3);
      const transform  = replaceElements(testArray, indexes, 'foo');
      expect(testArray).to.be.deep.equal([1,2,'foo',4,5,'foo',7,8,'foo',10]);
    });

    it('divisibleByBoth should return a transformed collection of numbers with the current replacements', function() {
      const replacements = [
        {
         divisor: 3,
         replacement: 'foo'
        },
        {
          divisor: 5,
          replacement: 'bar'
        }
      ];
      const numbers = arrayGenerator(100);
      const finalTest = divisibleByBoth(numbers, replacements);
      expect(finalTest).to.be.deep.equal(DESIRED_OUTPUT);
    });





})
