/**
* @function arrayGenerator
* @description generates an array of numbers
* @param {Number} number number of the max integer in array
* @returns {Array}
*/
function arrayGenerator(number ) {
  return [...Array(number).keys()].map(i => i+1);
}

/**
* @function getDivisorIndex
* @description helper to know if number in array is divisor of any number given and returns index if true or undefined (helper to avoid ternarys)
* @param { Number } number current number
* @param { Number } divisor divisor
* @param { Number } index index of the current number given in array
* @returns { Number | undefined }
*/
function getDivisorIndex(number = 0, divisor = 0, index = 0) {
  switch (number % divisor) {
    case 0:
      return index;
    default:
      return undefined;
  }
}

/**
* @function getDivisibleIndexes
* @description function that helps to know which numbers are multiples of given number
* @param { Array[numbers] } collection
* @param { Number } divisor
* @returns { Array }
*/
function getDivisibleIndexes(collection = [], divisor = 0) {
  return collection.map((n,i) => getDivisorIndex(n, divisor, i)).filter(el => el !== undefined);
}

/**
* @function getBothIndex
* @description helper to get repeated indexes of two collections
* @param { Array } mayor collection of integers
* @param { Array } minor collection of integers
* @returns { Array }
*/
function getBothIndex(mayor = [], minor = []) {
  return minor.filter(idx => mayor.includes(idx));
}

/**
* @function replaceElements
* @description function that replaces a number in a collection by a custom string
* @param { Array }  collection an array of numbers
* @param { Array } indexes collection of index to replace in the given collection
* @param { String } replacement string that replace the number
* @returns { Array }
*/
function replaceElements(collection = [], indexes = [], replacement = '') {
  for(let idx of indexes) {
    if (!isNaN(collection[idx])) {
      collection[idx] = replacement;
    }
  }
}

/**
* @function divisibleByBoth
* @description function to know which numbers are multiple of two numbers given and replace by custom string
* @param { Array } collection array of numbers
* @param { Array } replacements array of objects that contains divisor / multiple and custom string replacement
* @param { Object } replacement object in replacement object example { divisor: 4,  replacement: 'Foo' }
*/
function divisibleByBoth(collection = [], replacements = []) {

  const knowDivisors = replacements.map(element => {
    return {
      ...element,
      indexes: getDivisibleIndexes(collection, element.divisor),
    }
  });

  const orderKnowDivisors = knowDivisors.map(divisors => divisors.indexes).sort((a,b) => b.length - a.lenght);

  const divisibleByTwo = {
    replacement: knowDivisors.map(know => know.replacement).join(''),
    indexes: getBothIndex(...orderKnowDivisors)
  }

  const finalDivisors = [
    divisibleByTwo,
    ...knowDivisors
  ];

  let finalCollection = [...collection];

  for (let divisorObj of finalDivisors) {
    replaceElements(finalCollection, divisorObj.indexes, divisorObj.replacement)
  }

  return finalCollection;


}

module.exports = {
  arrayGenerator,
  getDivisorIndex,
  getDivisibleIndexes,
  getBothIndex,
  replaceElements,
  divisibleByBoth,
}
