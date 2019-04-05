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
console.log(`> Your results are for ${replacements[0].divisor} > "${replacements[0].replacement}" and ${replacements[1].divisor} > "${replacements[1].replacement}" are: \n \n [${results}] \n`)


console.log(`or with custom strings and numbers ....`)

const customReplacements = [
  {
   divisor: 2,
   replacement: 'ger'
  },
  {
    divisor: 4,
    replacement: 'man'
  }
];

const customResults = divisibleByBoth(numbers, customReplacements);
console.log(`> Your results are for ${customReplacements[0].divisor} > "${customReplacements[0].replacement}" and ${customReplacements[1].divisor} > "${customReplacements[1].replacement}" are: \n \n [${customResults}] \n`)
