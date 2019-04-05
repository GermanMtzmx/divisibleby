const { divisibleByBoth, arrayGenerator } = require('./utils');

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

const results = divisibleByBoth(numbers, replacements);
console.log(`> Your results are: \n [${results}] \n`)
